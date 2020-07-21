'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TurmaProfessor', { 
      id_professor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'Professor', key: 'codigo_professor' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_turma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'Turma', key: 'codigo_turma' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TurmaProfessor');
  }
};
