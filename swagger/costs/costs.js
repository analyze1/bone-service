/**
 * @swagger
 * tags: 
 *   name: Cost
 *   description: Cost management
 */

/**
 * @swagger
 * /api/brands/{sub_model_id}/costs:
 *   get:
 *     summary: Get costs by sub_model_id
 *     tags: [Cost]
 *     parameters:
 *       - name: sub_model_id
 *         in: path
 *         description: ID of the sub model
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of costs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   cost:
 *                     type: number
 *                   description:
 *                     type: string
 */