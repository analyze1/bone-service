// authMiddleware.js
const { verifyToken } = require('../providers/authService');

const verifyJWT = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    const decoded = verifyToken(token);
    if (decoded) {
        req.user = decoded;
        next();
    } else {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyJWT;