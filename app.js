const express = require('express')
,     app = express()
,     cors = require('cors')
// ,     mysql = require('mysql')
, 		port = 3001;

// cors
var corsOptions = {
  origin: ["http://localhost:3000", "http://10.0.2.2::19000"]
};

app.use(cors(corsOptions));

// .env
require('dotenv').config(); 

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

// Sequelize
const db = require("./models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// EJS
app.set('view engine', 'ejs'); 

// Static folder
app.use(express.static('public'));

// const db =  mysql.createConnection(
//   {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
//   });
  
//   db.connect((err) => {
//     if (err) { throw err;}
//     console.log('Connecté au serveur MySQL');
//   })

// Routes
// Produit 
require("./routes/produit.routes")(app);
require("./routes/categorie.routes")(app);

// Index
const index = require('./routes/indexRoute')
app.use('/', index)
	
// Listen
app.listen(port, () => {
  console.log(`Tourne sur le port : ${port}`);
});