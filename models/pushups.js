// IMPORTS
const { Sequelize } = require('sequelize');
const sequelize = require('configs/db.js');

// DEFINE PUSHUPS
const Pushups = sequelize.define('pushups', {
	id: {
		field: 'id',
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	user: {
		field: 'user',
		type: Sequelize.STRING
	},
	amount: {
		field: 'amount',
		type: Sequelize.INTEGER
	},
});

// EXPORTS
module.exports = Pushups;
