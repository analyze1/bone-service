/**
 * @swagger
 * /api/bitly/shorten-url-multiple:
 *   post:
 *     summary: Shorten multiple long URLs using Bitly
 *     tags: [Bitly]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               urls:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: 
 *                   - "https://www.example1.com/very/long/url"
 *                   - "https://www.example2.com/another/long/url"
 *                 description: An array of long URLs to be shortened
 *     responses:
 *       200:
 *         description: Shortened URLs details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 short_urls:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The ID of the shortened URL
 *                         example: "bit.ly/123abc"
 *                       long_url:
 *                         type: string
 *                         description: The original long URL
 *                         example: "https://www.example.com/very/long/url"
 *       500:
 *         description: Error shortening URLs or no active token found
 *     x-code-samples:
 *       - lang: curl
 *         source: |
 *           curl -X 'POST' \
 *             'http://localhost:8887/api/bitly/shorten-url-multiple' \
 *             -H 'accept: application/json' \
 *             -H 'Content-Type: application/json' \
 *             -d '{
 *               "urls": [
 *                 "https://www.example1.com/very/long/url",
 *                 "https://www.example2.com/another/long/url"
 *               ]
 *             }'
 *     x-examples:
 *       application/json:
 *         summary: Example request body
 *         value:
 *           {
 *             "urls": [
 *               "https://www.example1.com/very/long/url",
 *               "https://www.example2.com/another/long/url"
 *             ]
 *           }
 */