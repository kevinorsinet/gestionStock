#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------
DROP DATABASE IF EXISTS gestionstock; 
CREATE DATABASE gestionstock; 
USE gestionstock;

#------------------------------------------------------------
# Table: categorie
#------------------------------------------------------------

CREATE TABLE categorie(
        id_categorie   Int  Auto_increment  NOT NULL ,
        nom_categorie  Varchar (50) NOT NULL ,
        desc_categorie Mediumtext NOT NULL
	,CONSTRAINT categorie_PK PRIMARY KEY (id_categorie)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: utilisateur
#------------------------------------------------------------

CREATE TABLE utilisateur(
        id_utilisateur        Int  Auto_increment  NOT NULL ,
        nom_utilisateur       Varchar (50) NOT NULL ,
        prenom_utilisateur    Varchar (50) NOT NULL ,
        password_utilisateur  Varchar (50) NOT NULL ,
        email_utilisateur     Varchar (100) NOT NULL ,
        telephone_utilisateur Varchar (12) NOT NULL
	,CONSTRAINT utilisateur_PK PRIMARY KEY (id_utilisateur)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: produit
#------------------------------------------------------------

CREATE TABLE produit(
        id_produit          Int  Auto_increment  NOT NULL ,
        code_EAN            Varchar (55) NOT NULL ,
        nom_produit         Varchar (20) NOT NULL ,
        quantite_produit    Int NOT NULL ,
        commentaire_produit Mediumtext NOT NULL ,
        image_produit       Varchar (20) NOT NULL ,
        donation_produit    Bool NOT NULL ,
        date_ajout          Datetime NOT NULL ,
        id_utilisateur      Int NOT NULL ,
        id_categorie        Int NOT NULL
	,CONSTRAINT produit_PK PRIMARY KEY (id_produit)

	,CONSTRAINT produit_utilisateur_FK FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
	,CONSTRAINT produit_categorie0_FK FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: fournisseur
#------------------------------------------------------------

CREATE TABLE fournisseur(
        id_fournisseur         Int  Auto_increment  NOT NULL ,
        nom_fournisseur        Varchar (50) NOT NULL ,
        rue_fournisseur        Varchar (50) NOT NULL ,
        ville_fournisseur      Varchar (20) NOT NULL ,
        codepostal_fournisseur Varchar (5) NOT NULL ,
        email_fournisseur      Varchar (254) NOT NULL ,
        telephone_fournisseur  Varchar (12) NOT NULL ,
        contact_fournisseur    Varchar (20) NOT NULL
	,CONSTRAINT fournisseur_PK PRIMARY KEY (id_fournisseur)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: donateur
#------------------------------------------------------------

CREATE TABLE donateur(
        id_donateur        Int  Auto_increment  NOT NULL ,
        nom_donateur       Varchar (20) NOT NULL ,
        type_donateur      Bool NOT NULL ,
        mail_donateur      Varchar (20) NOT NULL ,
        telephone_donateur Varchar (12) NOT NULL
	,CONSTRAINT donateur_PK PRIMARY KEY (id_donateur)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: associer
#------------------------------------------------------------

CREATE TABLE associer(
        id_fournisseur Int NOT NULL ,
        id_produit     Int NOT NULL
	,CONSTRAINT associer_PK PRIMARY KEY (id_fournisseur,id_produit)

	,CONSTRAINT associer_fournisseur_FK FOREIGN KEY (id_fournisseur) REFERENCES fournisseur(id_fournisseur)
	,CONSTRAINT associer_produit0_FK FOREIGN KEY (id_produit) REFERENCES produit(id_produit)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: donner
#------------------------------------------------------------

CREATE TABLE donner(
        id_donateur Int NOT NULL ,
        id_produit  Int NOT NULL
	,CONSTRAINT donner_PK PRIMARY KEY (id_donateur,id_produit)

	,CONSTRAINT donner_donateur_FK FOREIGN KEY (id_donateur) REFERENCES donateur(id_donateur)
	,CONSTRAINT donner_produit0_FK FOREIGN KEY (id_produit) REFERENCES produit(id_produit)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: modifier
#------------------------------------------------------------

CREATE TABLE modifier(
        id_utilisateur    Int NOT NULL ,
        id_produit        Int NOT NULL ,
        date_modification Datetime NOT NULL ,
        quantite          Int NOT NULL
	,CONSTRAINT modifier_PK PRIMARY KEY (id_utilisateur,id_produit)

	,CONSTRAINT modifier_utilisateur_FK FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
	,CONSTRAINT modifier_produit0_FK FOREIGN KEY (id_produit) REFERENCES produit(id_produit)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: ajouter valeurs catégories
#------------------------------------------------------------
INSERT INTO categorie (`nom_categorie`)
VALUES ('T-SHIRTS'),
('OUTILS COLLECTE'),
('AFFICHES'),
('OUTILS / JEUX'),
('BROCHURES ET DEPLIANTS'),
('MATERIEL STAND');

#------------------------------------------------------------
# Table: ajouter valeurs utilisateurs
#------------------------------------------------------------
INSERT INTO utilisateur (`nom_utilisateur`, `prenom_utilisateur`, `password_utilisateur`, `email_utilisateur`, `telephone_utilisateur`)
VALUES ('Orsinet', 'Kévin', '1234', 'kevin.orsinet@gmail.com', '0212235645'),
('Yim', 'Philippe', '1234', 'contact@arinfo.fr', '0212564565');

INSERT INTO donateur (`nom_donateur`, `type_donateur`, `mail_donateur`, `telephone_donateur`)
VALUES ('Sodebo', 1, 'serviceconsommateurs@sodebo.fr', '0251430303'),
('Jean Dupont', 0, 'jeandupont@gmail.com','0251430333');

INSERT INTO produit (`code_EAN`, `nom_produit`, `quantite_produit`, `commentaire_produit`, `image_produit`, `donation_produit`, `date_ajout`, `id_utilisateur`, `id_categorie`)
VALUES ('3256224353607', 'Bâche bénévolat', 1,'commentaire bache', 'bache.jpg', 1, '2021-04-21', 1, 6),
('3256266653607', 'T-shirts orange', 50,'commentaire tshirt', 't-shirt.jpg', 1, '2022-04-21', 2, 1),
('3256224353623', 'Brochure Agir pour sa santé', 100, 'commentaire brochure blabla', 'brochure.jpg', 0,  '2022-05-23', 2, 5);

INSERT INTO fournisseur (`nom_fournisseur`, `rue_fournisseur`, `ville_fournisseur`, `codepostal_fournisseur`, `email_fournisseur`, `telephone_fournisseur`, `contact_fournisseur`)
VALUES ('vistaPrint', '3 rue des Mésanges', 'Paris', '75000','vistaprintcontact@gmail.com', '0265847865', 'Sabrina Legrand');

INSERT INTO associer (`id_fournisseur`, `id_produit`)
VALUES (1, 3);

INSERT INTO donner (`id_donateur`, `id_produit`)
VALUES (1, 2),
(2, 1);

INSERT INTO modifier (`id_utilisateur`, `id_produit`, `date_modification`, `quantite`)
VALUES (1, 3, '2022-05-23', -15);