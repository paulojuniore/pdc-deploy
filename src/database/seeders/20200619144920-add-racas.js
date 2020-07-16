'use strict';

const path = require('path');
const { readFile, buildRacas } = require('../../populate/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'cor.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Raca', buildRacas(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Raca', null, {});
  }
};
