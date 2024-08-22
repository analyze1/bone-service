/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "newuser"
 *                 description: The username for the new user
 *               password:
 *                 type: string
 *                 example: "password123"
 *                 description: The password for the new user
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly registered user
 *                   example: 1
 *                 username:
 *                   type: string
 *                   description: The username of the newly registered user
 *                   example: "newuser"
 *                 password:
 *                   type: string
 *                   description: The password of the newly registered user (usually hashed)
 *                   example: "$2b$10$..."
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp of when the user was registered
 *                   example: "2024-08-15T08:30:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp of when the user was last updated
 *                   example: "2024-08-15T08:30:00Z"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */