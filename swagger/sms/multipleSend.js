/**
 * @swagger
 * /api/sms/multiple-send:
 *   post:
 *     summary: Send multiple SMS messages using the specified service
 *     tags: [SMS]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               serviceName:
 *                 type: string
 *                 example: "Twilio"
 *                 description: The name of the SMS service to use
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     mobileNo:
 *                       type: string
 *                       example: "08xxxxxxxx"
 *                       description: The mobile number to send the SMS to
 *                     message:
 *                       type: string
 *                       example: "Hello, this is a test message"
 *                       description: The message to send
 *     responses:
 *       200:
 *         description: SMS sent successfully to all recipients
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "SMS sent successfully"
 *                 details:
 *                   type: object
 *                   properties:
 *                     serviceName:
 *                       type: string
 *                       example: "Twilio"
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           mobileNo:
 *                             type: string
 *                             example: "08xxxxxxxx"
 *                           message:
 *                             type: string
 *                             example: "Hello, this is a test message"
 *       404:
 *         description: Service not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Service not found"
 *       500:
 *         description: Failed to process SMS requests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to process SMS requests"
 */