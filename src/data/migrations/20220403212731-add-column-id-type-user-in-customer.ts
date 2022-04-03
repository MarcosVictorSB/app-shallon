'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn('Customers', 'id_typeuser', {
            type: Sequelize.DATE,
            allowNull: true
        })
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.removeColumn('Customers', 'id_typeuser');
    }
};
