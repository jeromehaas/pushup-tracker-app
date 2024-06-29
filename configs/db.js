// IMPORTS
const { Sequelize } = require('sequelize');

// SETUP ORM
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
	logging: false,
	define: {
		timestamps: true
	}
});

// EXPORTS
module.exports = sequelize;
