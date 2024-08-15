/**
 * @swagger
 * /api/submodels/brand/{model_id}:
 *   get:
 *     summary: Get all submodels by brand ID
 *     tags: [SubBrand]
 *     parameters:
 *       - name: model_id
 *         in: path
 *         description: ID of the brand to get submodels for
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of submodels
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
 *                   mo:
 *                     type: string
 *       500:
 *         description: Error fetching submodels
 */