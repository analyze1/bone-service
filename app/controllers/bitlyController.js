const axios = require('axios');
const { dbCenterDB } = require('../models');
const Bitly = dbCenterDB.Bitly;

const shortenUrlMultiple = async (req, res) => {
    const { urls } = req.body;
    let token = await getBitlyActiveToken();
    try {
        if (!token) {
            return res.status(500).send('No active token found');
        }
        console.log('Token:', token);
        const data = { long_url: urls };
        let response = []
        for (let i = 0; i < data.long_url.length; i++) {
            data.long_url[i] = data.long_url[i].trim();
            response.push(await axios.post('https://api-ssl.bitly.com/v4/bitlinks', { long_url: data.long_url[i] }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }));
        }
        res.json(response.map(r => ({
            id: r.data.id,
            long_url: r.data.long_url
        })));
    } catch (error) {
        console.error('(Catch)Error:', error.response ? error.response.data : error.message);

        if (error.response && error.response.status === 403 || error.response.data.message === "MONTHLY_ENCODE_LIMIT_REACHED") {
            token = await reloadToken(token);
            if (token) {
                try {
                    const response = await axios.post('https://api-ssl.bitly.com/v4/bitlinks', data, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });

                    return res.json(response.data);
                } catch (retryError) {
                    console.error('Retry Error:', retryError.response ? retryError.response.data : retryError.message);
                    return res.status(500).send('Error shortening URL after token reload');
                }
            } else {
                return res.status(500).send('No valid token found after reload');
            }
        } else {
            return res.status(500).send('Error shortening URL');
        }
    }
}

const shortenUrl = async (req, res) => {
    const { url } = req.body;
    let token = await getBitlyActiveToken();
    try {
        if (!token) {
            return res.status(500).send('No active token found');
        }
        console.log('Token:', token);
        const data = { long_url: url };

        let response = await axios.post('https://api-ssl.bitly.com/v4/bitlinks', data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('(Catch)Error:', error.response ? error.response.data : error.message);

        if (error.response && error.response.status === 403 || error.response.data.message === "MONTHLY_ENCODE_LIMIT_REACHED") {
            token = await reloadToken(token);
            if (token) {
                try {
                    const response = await axios.post('https://api-ssl.bitly.com/v4/bitlinks', data, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });

                    return res.json(response.data);
                } catch (retryError) {
                    console.error('Retry Error:', retryError.response ? retryError.response.data : retryError.message);
                    return res.status(500).send('Error shortening URL after token reload');
                }
            } else {
                return res.status(500).send('No valid token found after reload');
            }
        } else {
            return res.status(500).send('Error shortening URL');
        }
    }
};

const getBitlyActiveToken = async () => {
    try {
        let activeToken = await Bitly.findOne({ where: { Active: 1 } });
        if (!activeToken) {
            const resetSuccessful = await resetTokenActive();
            if (resetSuccessful) {
                activeToken = await Bitly.findOne({ where: { Active: 1 } });
            }
        }
        return activeToken['BitlyToken'] ? activeToken['BitlyToken'] : null;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
const reloadToken = async (currentToken) => {
    try {
        console.log('Reloading token:', currentToken);
        // Mark the current token as inactive
        await Bitly.update({ Active: 0 }, { where: { BitlyToken: currentToken } });

        // Fetch a new token (this example assumes you have multiple tokens stored in the database)
        const newToken = await Bitly.findOne({ where: { Active: 1 } });

        if (newToken) {
            // Mark the new token as active
            await Bitly.update({ Active: 1 }, { where: { id: newToken.id } });
            return newToken['BitlyToken'];
        } else {
            console.error('No inactive token found');
            return null;
        }
    } catch (error) {
        console.error('Error reloading token:', error);
        return null;
    }
};

const resetTokenActive = async (req, res) => {
    try {
        await Bitly.update({ Active: 0 }, { where: {} });
        res.send('Token active reset');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error resetting token active');
    }
}

module.exports = { shortenUrl, shortenUrlMultiple };