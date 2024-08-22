const axios = require('axios');

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

module.exports = { sendSms };