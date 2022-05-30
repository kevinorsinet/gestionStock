module.exports = app => {
  const produits = require("../controllers/produit.controller.js");

  var router = require("express").Router();

  app.use('/api/produits', router);

  // Ajouter un nouveau produit
  router.post("/", produits.create);

  // Afficher tous les produits
  router.get("/", produits.findAll);

	// Afficher un produit
	router.get("/:id", produits.findOne);

	// Modifier un produit
	router.put("/:id", produits.update);

	// Supprimer un produit
	router.delete("/:id", produits.delete);
};