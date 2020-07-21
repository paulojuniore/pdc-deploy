require('dotenv/config')

/* Arquivo responsável pela configuração da conexão com o banco de dados. */

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timeStamps: false,
    underscored: true,
    freezeTableName: true,
  },
}
