module.exports = app => {
  const categories = require("../controllers/categorie.controller.js");

  var router = require("express").Router();

  app.use('/api/categories', router);

  // Ajouter une nouvelle catégorie
  router.post("/", categories.create);

  // // Afficher toutes les catégories
  router.get("/", categories.findAll);

	// Afficher toutes les produits d'une catégorie
	router.get("/produits", categories.findAllWithProducts);
	
	// // Afficher un produit
	router.get("/:id", categories.findOne);
	
	// // Modifier un produit
	// router.put("/:id", categories.update);

	// // Supprimer un produit
	// router.delete("/:id", categories.delete);
};