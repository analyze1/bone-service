/**
 * @swagger
 * tags:
 *  name: Brand
 *  description: Brand management
 */
/**
 * @swagger
 * /api/brands/name/{name}:
 *   get:
 *     summary: Get a brand by name
 *     tags: [Brand]
 *     parameters:
 *       - name: name
 *         in: path
 *         description: Name of the brand
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Brand details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 country:
 *                   type: string
 *       404:
 *         description: Brand not found
 */