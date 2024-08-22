const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { dbMain } = require('../models');
const User = dbMain.User;
const { JWT_SECRET } = process.env;

const generateToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
    }
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

const authenticateUser = async (username, password) => {
    const user = await User.findOne({ where: { username } });
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch ? user : null;
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

module.exports = {
    authenticateUser,
    verifyToken,
    generateToken
};


