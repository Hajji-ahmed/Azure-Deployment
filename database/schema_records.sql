-- --------------------------------------------------------
-- Fichier de configuration SQL pour la table USERS
-- Date : 2025
-- --------------------------------------------------------


CREATE DATABASE IF NOT EXISTS db;
USE db;

-- 2. Suppression de la table si elle existe déjà (pour éviter les erreurs lors du rechargement)
DROP TABLE IF EXISTS users;

-- 3. Création de la table users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Insertion des données (Records)

INSERT INTO users (nom, prenom, email, password) VALUES 
('Adama', 'COULIBALY','startlingadama@gmail.com','Adama2024!'),
('Dupont', 'Jean', 'jean.dupont@example.com', 'secret123'),
('Martin', 'Sophie', 'sophie.martin@example.com', 'azerty456'),
('Bernard', 'Lucas', 'lucas.bernard@example.com', 'password789'),
('Dubois', 'Marie', 'marie.dubois@example.com', 'marie2025'),
('Thomas', 'Arthur', 'arthur.thomas@example.com', 'arthur_pass'),
('Petit', 'Camille', 'camille.petit@example.com', 'chaton123'),
('Robert', 'Nicolas', 'nicolas.robert@example.com', 'admin1234'),
('Richard', 'Léa', 'lea.richard@example.com', 'soleil2024'),
('Durand', 'Hugo', 'hugo.durand@example.com', 'football99'),
('Moreau', 'Chloé', 'chloe.moreau@example.com', 'voyage2023');

-- Fin du fichier