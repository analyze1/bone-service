const axios = require('axios');
const { readJsonFile } = require('./readJsonFileController');

/**
 * Initializes the service to read SMS data from a JSON file and returns the data.
 * 
 * @param {Object} req - The request object from Express.
 * @param {Object} req.query - The query parameters from the request.
 * @param {string} req.query.service - The service name to match in the JSON file.
 * @param {string} req.query.mobileNo - The mobile number to send the SMS to.
 * @param {string} req.query.message - The SMS message content.
 * @param {Object} res - The response object from Express.
 * @returns {Promise<Object>} The data from the JSON file or an error message.
 * @async
 */
async function init(req, res) {
    try {
        const { serviceName, mobileNo, message } = req.body;
        // console.log(serviceName, mobileNo, message);
        const fileName = 'sms.json';
        const data = await readJsonFile(fileName);
        const serviceData = await findService(data, serviceName);
        if (!serviceData) {
            console.log({ error: 'Service not found' });
            return { error: 'Service not found' };
        }
        const { account, password, category, baseUrl } = serviceData;
        const response = await sendSms(account, password, mobileNo, message, category, baseUrl);
        return {
            success: response,
            message: 'SMS sent successfully',
            details: {
                serviceName: serviceName,
                mobileNo: mobileNo,
                message: message
            }
        };
    } catch (err) {
        console.error("Error reading JSON file: ", err);
        return { error: 'Failed to read JSON file' };
    }
}

async function findService(data, serviceName) {
    return data.find(s => s.title === serviceName);
}


async function sendSms(account, password, mobileNo, message, category, baseurl) {

    // console.log(account, password, mobileNo, message, category, baseurl);

    const params = new URLSearchParams(
        {
            ACCOUNT: account,
            PASSWORD: password,
            MOBILE: mobileNo,
            MESSAGE: message
        }
    );

    try {
        const response = await axios.post(baseurl, params.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            maxRedirects: 0
        });
        console.log("Response from SMS API: ", response.data);
        return { status: 'success', data: response.data || 'Success', message: 'SMS sent successfully' };
    } catch (error) {
        console.log("Error from SMS API: ", error.message);
        return error.message;
    }
}

module.exports = { init, sendSms };