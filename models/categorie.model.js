module.exports = (sequelize, Sequelize) => {
  const Categorie = sequelize.define("categorie", {
		id_categorie : {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		nom_categorie: {
      type: Sequelize.STRING(55)
    },
  	desc_categorie: {
      type: Sequelize.TEXT
    }
  });

  return Categorie;
};