/**
 * @swagger
 * tags:
 *   name: Brand
 *   description: Brand management
 */
/**
 * @swagger
 * /api/brands/{id}:
 *   get:
 *     summary: Get a brand by ID
 *     tags: [Brand]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the brand
 *         required: true
 *         schema:
 *           type: integer
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