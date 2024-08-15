/**
 * @swagger
 * /api/submodels/{id}:
 *   get:
 *     summary: Get a submodel by ID
 *     tags: [SubBrand]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the submodel
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Submodel details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 mo:
 *                   type: string
 *       404:
 *         description: Submodel not found
 */