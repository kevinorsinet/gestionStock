const express = require('express')
,     app = express()
,     mysql = require('mysql')
, 		port = 3000;

// .env
require('dotenv').config(); 

const db =  mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

db.connect((err) => {
	if (err) { throw err;}
	console.log('Connecté au serveur MySQL');
});

	// Listen
app.listen(port, () => {
  console.log(`Tourne sur le port : ${port}`);
});