'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Curriculo', { 
      codigo_disciplina: {
        type: Sequelize.STRING(7),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_tipo_disciplina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { Model: 'TipoDisciplina', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_unidade_academica: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { Model: 'UnidadeAcademica', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      } 
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Curriculo');
  }
};
