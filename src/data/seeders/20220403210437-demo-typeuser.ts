'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TypeUsers', 
    [
        {
            name: 'Cliente',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Barbeiro',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Cabeleleira',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Manicure',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Pedicure',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Manicure/Pedicure',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TypeUsers', null, {});
  }
};
