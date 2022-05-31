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
      type: Sequelize.STRING(50)
    },
		quantite_produit: {
      type: Sequelize.INTEGER
    },
		commentaire_produit: {
      type: Sequelize.STRING
    },
		image_produit: {
      type: Sequelize.STRING(100)
    },
		donation_produit: {
      type: Sequelize.BOOLEAN
    }
  });

  return Produit;
};