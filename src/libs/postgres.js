const { Pool } = require('pg');

// Use Process ENV

const postgres = new Pool({
	user: '',
	password: '',
	host: '',
	database: '',
	port: ,
	ssl: { rejectUnauthorized: false }, // For Localhost
	sslmode: ''
});

module.exports = {
	postgres,
};

