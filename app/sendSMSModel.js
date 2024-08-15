/**
 * Represents an SMS model.
 */
class SendSMSModel {
    /**
     * Creates an instance of SendSMSModel.
     * @param {string} service - The service name.
     * @param {string} mobileNo - The recipient's mobile number.
     * @param {string} message - The message to be sent.
     */
    constructor({ service, mobileNo, message }) {
        this.service = service;
        this.mobileNo = mobileNo;
        this.message = message;
    }

    /**
     * Validates the SMS data.
     * @returns {Object} Validation result with valid status and message.
     */
    validate() {
        const errors = [];

        if (!this.service) {
            errors.push('Service is required');
        }
        if (!this.mobileNo) {
            errors.push('Mobile number is required');
        } else if (this.mobileNo.length !== 10) {
            errors.push('Mobile number must be 10 digits');
        }
        if (!this.message) {
            errors.push('Message is required');
        }

        if (errors.length > 0) {
            return { valid: false, messages: errors };
        }

        return { valid: true };
    }
}

module.exports = SendSMSModel;