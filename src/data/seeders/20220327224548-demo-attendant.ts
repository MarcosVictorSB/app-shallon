'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Attendants', 
        [
            {
                name: 'Barbeario 1',
                email: 'barbeiro@gmail.com',
                password: '123456',
                logo: '',
                phone: 38171390,
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'Barbeario 2',
                email: 'barbeiro2@gmail.com',
                password: '123456',
                logo: '',
                phone: 38171391,
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'Barbeario 3',
                email: 'barbeiro@gmail.com',
                password: '123456',
                logo: '',
                phone: 38171393,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Attendants', null, {});
    }
};
