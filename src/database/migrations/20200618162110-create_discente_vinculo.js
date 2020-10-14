'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DiscenteVinculo', { 
      cpf: {
        type: Sequelize.STRING(11),
        primaryKey: true,
        allowNull: false,
        references: { model: 'Discente', key: 'cpf' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      matricula: {
        type: Sequelize.STRING(9),
        primaryKey: true,
        allowNull: false,
      },
      id_ingresso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Ingresso', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      semestre_ingresso: {
        type: Sequelize.STRING(6),
        allowNull: false,
      },
      id_curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Curso', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_situacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'SituacaoDiscente', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      semestre_situacao: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      id_situacao_vinculo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'SituacaoVinculo', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_cota: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Cota', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_tipo_escola: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Escola', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ano_conclusao_ensino_medio: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      curriculo: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      carga_hor_obrig_int: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cred_obrig_int: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      carga_hor_opt_int: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cred_opt_int: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      carga_hor_comp_int: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cred_comp_int: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cra: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      mc: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      iea: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      per_int: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tranc: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mat_inst: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mob_estudantil: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cred_matriculados: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      media_geral_ingresso: {
        type: Sequelize.REAL,
        allowNull: true,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DiscenteVinculo');
  }
};