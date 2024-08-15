/**
 * @swagger
 * /api/bitly/shorten-url:
 *   post:
 *     summary: Shorten a long URL using Bitly
 *     tags: [Bitly]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 example: "https://www.example.com/very/long/url"
 *                 description: The long URL to be shortened
 *     responses:
 *       200:
 *         description: Shortened URL details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the shortened URL
 *                   example: "bit.ly/123abc"
 *       500:
 *         description: Error shortening URL or no active token found
 *     x-code-samples:
 *       - lang: curl
 *         source: |
 *           curl -X 'POST' \
 *             'http://172.50.0.129:8887/api/bitly/shorten-url' \
 *             -H 'accept: application/json' \
 *             -H 'Content-Type: application/json' \
 *             -d '{
 *               "url": "https://www.example.com/very/long/url"
 *             }'
 *     x-examples:
 *       application/json:
 *         summary: Example request body
 *         value:
 *           {
 *             "url": "https://www.example.com/very/long/url"
 *           }
 */