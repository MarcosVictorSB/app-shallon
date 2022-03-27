'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Customers', [
            {
                name: 'Customer 1',
                email: 'customer1@fake.com.br',
                password: '123456',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Customer 2',
                email: 'customer2@fake.com.br',
                password: '123456',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Customer 3',
                email: 'customer3@fake.com.br',
                password: '123456',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], 
        {});    
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
