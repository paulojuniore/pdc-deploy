'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Curriculo', { id: Sequelize.INTEGER });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Curriculo');
  }
};
