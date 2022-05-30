const db = require("../models");
const Produit = db.produits;
const Op = db.Sequelize.Op;

// Create and Save a new Produit
exports.create = (req, res) => {
  // Validate request
  if (!req.body.code_EAN) {
    res.status(400).send({
      message: "Le code_EAN ne peut être vide!"
    });
    return;
  }

	if (!req.body.nom_produit) {
    res.status(400).send({
      message: "Le nom du produit ne peut être vide!"
    });
    return;
  }

	if (!req.body.quantite_produit) {
    res.status(400).send({
      message: "La quantité ne peut être vide!"
    });
    return;
  }

	if (!req.body.image_produit) {
    res.status(400).send({
      message: "Une image doit être ajouté!"
    });
    return;
  }

	if (!req.body.donation_produit) {
    res.status(400).send({
      message: "Le type de donation ne peut être vide"
    });
    return;
  }

	if (!req.body.date_ajout) {
    res.status(400).send({
      message: "La date d'ajout ne peut être vide"
    });
    return;
  }
  // Create a Produit
  const produit = {
    code_EAN: req.body.code_EAN,
    nom_produit: req.body.nom_produit,
		quantite_produit: req.body.quantite_produit,
		image_produit: req.body.image_produit,
		donation_produit: req.body.donation_produit,
    date_ajout: req.body.donation_produit,
		categorieId: req.body.categorieId
  };

  // Save Produit in the database
  Produit.create(produit)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Produit."
      });
    });
};

// Récupère les produits.
exports.findAll = (req, res) => {
  const nom_produit = req.query.nom_produit;
  var condition = nom_produit ? { nom_produit: { [Op.like]: `%${nom_produit}%` } } : null;

  return Produit.findAll({ where: condition, include: ["categorie"] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving produits."
      });
    });
};

exports.findOne = (req, res) => {
	const idProduit = req.params.id;

	Produit.findByPk(idProduit, {include: ["categories"]})
	.then(data => {
		if (data) {
			res.send(data);
		} else {
			res.status(404).send({
				message: `Cannot find Produit with id=${idProduit}.`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "Error retrieving Produit with id=" + idProduit
		});
	});
};

exports.update = (req, res) => {
	const idProduit = req.params.id;
	Produit.update(req.body, {
		where: {
			id_produit : idProduit
		}
	})
	.then(num => {
		if (num == 1) {
			res.send({
				message: "Mise à jour avec succès."
			});
		} else {
			res.send({
				message: `Cannot update Produit with id=${idProduit}. Maybe Produit was not found or req.body is empty!`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "Error updating Produit with id=" + idProduit
		});
	});
};

exports.delete = (req, res) => {
	const idProduit = req.params.id;
	Produit.destroy({
		where: {
			id_produit : idProduit
		}
	})
	.then(num => {
		if (num == 1) {
			res.send({
				message: "Produit supprimé avec succès."
			});
		} else {
			res.send({
				message: `Cannot delete Produit with id=${idProduit}. Maybe Produit was not found or req.body is empty!`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "Error deleting Produit with id=" + idProduit
		});
	});
	;
};

