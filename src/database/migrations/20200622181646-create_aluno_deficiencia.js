'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AlunoDeficiencia', { 
      cpf_aluno: {
        type: Sequelize.STRING(11),
        allowNull: false,
        primaryKey: true,
        references: { model: 'Discente', key: 'cpf' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      codigo_deficiencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'Deficiencia', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AlunoDeficiencia');
  }
};
