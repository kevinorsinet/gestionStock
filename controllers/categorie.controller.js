const db = require("../models");
const Categorie = db.categories;
const Produit= db.produits;
const Op = db.Sequelize.Op;

// Create and Save a new Categorie
exports.create = (req, res) => {
  // Validate request
	if (!req.body.nom_categorie) {
    res.status(400).send({
      message: "Le nom de la catégorie ne peut être vide!"
    });
    return;
  }

	if (!req.body.desc_categorie) {
    res.status(400).send({
      message: "La description peut être vide!"
    });
    return;
  }


  // Create a Categorie
  const categorie = {
    nom_categorie: req.body.nom_categorie,
    desc_categorie: req.body.desc_categorie
  };

  // Save Categorie in the database
  Categorie.create(categorie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Categorie."
      });
    });
};

// Récupère les categories.
exports.findAll = (req, res) => {
  const nom_categorie = req.query.nom_categorie;
  var condition = nom_categorie ? { nom_categorie: { [Op.like]: `%${nom_categorie}%` } } : null;

  Categorie.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};

exports.findOne = (req, res) => {
	const idCategorie = req.params.id;

	Categorie.findByPk(idCategorie)
	.then(data => {
		if (data) {
			res.send(data);
		} else {
			res.status(404).send({
				message: `Cannot find Categorie with id=${idCategorie}.`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "Error retrieving Categorie with id=" + idCategorie
		});
	});
};

exports.update = (req, res) => {
	const idCategorie = req.params.id;
	Categorie.update(req.body, {
		where: {
			id_categorie: idCategorie
		}
	})
	.then(num => {
		if (num == 1) {
			res.send({
				message: "Mise à jour avec succès."
			});
		} else {
			res.send({
				message: `Cannot update Categorie with id=${idCategorie}. Maybe Categorie was not found or req.body is empty!`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "Error updating Categorie with id=" + idCategorie
		});
	});
};

exports.delete = (req, res) => {
	const idCategorie = req.params.id;
	Categorie.destroy({
		where: {
			id_categorie: idCategorie
		}
	})
	.then(num => {
		if (num == 1) {
			res.send({
				message: "Categorie supprimé avec succès."
			});
		} else {
			res.send({
				message: `Cannot delete Categorie with id=${idCategorie}. Maybe Categorie was not found or req.body is empty!`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "Error deleting Categorie with id=" + idCategorie
		});
	});
	;
};

exports.findAllWithProducts = (req, res) => { 
  Categorie.findAll({
		include: {
			model: Produit,
			as: 'produits'
  	}
	})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};
