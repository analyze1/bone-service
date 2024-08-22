'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
    async up(queryInterface, Sequelize) {
        const salt = await bcrypt.genSalt(10);

        // Define your mockup users
        const users = [
            {
                firstName: 'John',
                lastName: 'Doe',
                username: 'john.doe@example.com',
                role: 'admin',
                password: await bcrypt.hash('password123', salt),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Jane',
                lastName: 'Smith',
                username: 'jane.smith@example.com',
                role: 'user',
                password: await bcrypt.hash('password123', salt),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Alice',
                lastName: 'Johnson',
                username: 'alice.johnson@example.com',
                role: 'user',
                password: await bcrypt.hash('password123', salt),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];

        // Insert the mockup users into the database
        await queryInterface.bulkInsert('users', users, {});
    },

    async down(queryInterface, Sequelize) {
        // Remove the mockup users
        await queryInterface.bulkDelete('users', null, {});
    }
};