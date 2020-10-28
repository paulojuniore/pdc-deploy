'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UnidadeAcademica', { id: Sequelize.INTEGER });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UnidadeAcademica');
  }
};
