const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize( dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.produits = require("./produit.model.js")(sequelize, Sequelize);
db.categories = require("./categorie.model.js")(sequelize, Sequelize);

// Relation
db.categories.hasMany(db.produits, {as: 'produits'});
db.produits.belongsTo(db.categories, 
  {
    foreignKey: 'categorieId',
    as: 'categorie'
  });

module.exports = db;