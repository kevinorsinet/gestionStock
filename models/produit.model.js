module.exports = (sequelize, Sequelize) => {
  const Produit = sequelize.define("produit", {
		id_produit : {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		code_EAN: {
      type: Sequelize.STRING(55)
    },
    nom_produit: {
      type: Sequelize.STRING(20)
    },
		quantite_produit: {
      type: Sequelize.INTEGER
    },
		commentaire_produit: {
      type: Sequelize.STRING
    },
		image_produit: {
      type: Sequelize.STRING(20)
    },
		donation_produit: {
      type: Sequelize.BOOLEAN
    },
    date_ajout: {
      type: Sequelize.DATE
    }
  });

  return Produit;
};