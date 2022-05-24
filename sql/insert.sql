INSERT INTO categorie (`nom_categorie`)
VALUES ('T-SHIRTS'),
('OUTILS COLLECTE'),
('AFFICHES'),
('OUTILS / JEUX'),
('BROCHURES ET DEPLIANTS'),
('MATERIEL STAND');


INSERT INTO utilisateur (`nom_utilisateur`, `prenom_utilisateur`, `password_utilisateur`, `email_utilisateur`, `telephone_utilisateur`)
VALUES ('Orsinet', 'Kévin', '1234', 'kevin.orsinet@gmail.com', '0212235645'),
VALUES ('Yim', 'Philippe', '1234', 'conatact@arinfo.fr', '0212564565');

INSERT INTO donateur (`nom_donateur`, `type_donateur`, `mail_donateur`, `telephone_donateur`)
VALUES ('Sodebo', 1, 'serviceconsommateurs@sodebo.fr', , '02 51 43 03 03');


INSERT INTO donateur (`nom_donateur`, `type_donateur`, `mail_donateur`, `telephone_donateur`)
VALUES ('Jean Dupont', 0, 'jeandupont@gmail.com','02 51 43 03 03');

INSERT INTO produit (`code_EAN`, `nom_produit`, `quantite_produit`, `commentaire_ produit`, `image_produit`, `donation_produit`, `date_ajout`, `id_utilisateur`, `id_categorie`)
VALUES ('3256224353607', 'Bâche bénévolat', 1,'commentaire bache', 'bache.jpg', 1, GETDATE(), 1, 6),
('3256266653607', 'T-shirts orange', 50,'commentaire tshirt', 't-shirt.jpg', 0, GETDATE(), 2, 1);

INSERT INTO fournisseur (`nom_fournisseur`, `rue_fournisseur`, `ville_fournisseur`, `codepostal_fournisseur`, `email_fournisseur`, `telephone_fournisseur`, `contact_fournisseur`)
VALUES ('vistaPrint', '3 rue des Mésanges', 'Paris', '75000','vistaprintcontact@gmail.com', '0265847865', 'Sabrina Legrand');

Bâche bénévolat 1  MATERIEL STAND

INSERT INTO produit (`code_EAN`, `nom_produit`, `quantite_produit`, `commentaire_ produit`, `image_produit`, `donation_produit`, `date_ajout`, `id_utilisateur`, `id_categorie`)
VALUES ('3256224353623', 'Brochure Agir pour sa santé', 100,'commentaire brochure blabla', 'brochure.jpg', 1,  '2022-05-23', 2, 5),

