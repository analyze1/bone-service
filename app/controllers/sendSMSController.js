const { sendSms } = require('./../providers/smsService');
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
const sms = async (req, res) => {
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

const multipleSendSms = async (req, res) => {
    try {
        // example of req.body: { "serviceName": "service1", data: [{ "mobileNo": "1234567890", "message": "Hello" }, { "mobileNo": "0987654321", "message": "Hi" }] }
        const { serviceName, data } = req.body;
        console.log(req.body, 'req.body');
        console.log(serviceName, data);
        const fileName = 'sms.json';
        const serviceData = await readJsonFile(fileName);
        const service = await findService(serviceData, serviceName);
        if (!service) {
            console.log({ error: 'Service not found' });
            return res.status(404).json({ error: 'Service not found' });
        }
        const { account, password, category, baseUrl } = service;
        const responses = [];
        for (const item of data) {
            const { mobileNo, message } = item;
            const response = await sendSms(account, password, mobileNo, message, category, baseUrl);
            responses.push(response);
        }
        // return {
        //     success: responses,
        //     message: 'SMS sent successfully',
        //     details: {
        //         serviceName: serviceName,
        //         data: data
        //     }
        // };
        return res.status(200).json({
            success: responses,
            message: 'SMS sent successfully',
            details: {
                serviceName: serviceName,
                data: data
            }
        }, 200);

    } catch (err) {
        console.error("Error reading JSON file: ", err);
        return res.status(500).json({ error: 'Failed to read JSON file' });
    }
}
async function findService(data, serviceName) {
    return data.find(s => s.title === serviceName);
}

module.exports = { sms, multipleSendSms };