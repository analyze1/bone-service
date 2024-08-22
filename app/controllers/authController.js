const { authenticateUser, generateToken } = require('../providers/authService');
const { dbMain } = require('../models');
const User = dbMain.User;

const bcrypt = require('bcryptjs');

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await authenticateUser(username, password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.json({ token });
}

const register = async (req, res) => {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    console.log(encryptedPassword, 'encryptedPassword');
    console.log(password, 'password');
    const checkUserExists = await User.findOne({ where: { username } });
    if (checkUserExists) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const user = await User.create({ username, password: encryptedPassword });
    res.json(user);
}
module.exports = {
    login,
    register
};