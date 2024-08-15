/**
 * @swagger
 * tags:
 *   name: Brand
 *   description: Brand management limit 10 records
 */

/**
 * @swagger
 * /api/brands:
 *   get:
 *     summary: Get all brands limit 10 records
 *     tags: [Brand]
 *     responses:
 *       200:
 *         description: List of brands
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */