const { Sequelize } = require('sequelize');
const sequelize = require('configs/db.js');

// const Pushups = [1, 2, 3, 4];

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

module.exports = Pushups;
