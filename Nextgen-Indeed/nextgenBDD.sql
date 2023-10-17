-- phpMyAdmin SQL Dump
-- version 5.2.1deb1ubuntu0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 11 oct. 2023 à 18:13
-- Version du serveur : 8.0.34-0ubuntu0.23.04.1
-- Version de PHP : 8.1.12-1ubuntu4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `NEXTGEN`
--
CREATE DATABASE IF NOT EXISTS `NEXTGEN` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `NEXTGEN`;

-- --------------------------------------------------------

--
-- Structure de la table `ANNONCES`
--

CREATE TABLE `ANNONCES` (
  `JOB_ID` int NOT NULL,
  `CORP_ID` int DEFAULT NULL,
  `USER_ID` int DEFAULT NULL,
  `DATE` date DEFAULT NULL,
  `SHORT_DESC` varchar(255) DEFAULT NULL,
  `FULL_DESC` text,
  `ADRESSE` varchar(255) DEFAULT NULL,
  `SALAIRE` text,
  `HORAIRES` varchar(255) DEFAULT NULL,
  `AVANTAGES` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `ANNONCES`
--

INSERT INTO `ANNONCES` (`JOB_ID`, `CORP_ID`, `USER_ID`, `DATE`, `SHORT_DESC`, `FULL_DESC`, `ADRESSE`, `SALAIRE`, `HORAIRES`, `AVANTAGES`) VALUES
(41, 1, 1, '2023-10-10', 'Poste de développeur', 'Recherche dun développeur expérimenté pour un projet passionnant.', '123 Rue de lExemple, Ville, Pays', '1k/an', 'Lundi à vendredi, 9h à 17h', 'Assurance santé, congés payés');

-- --------------------------------------------------------

--
-- Structure de la table `CORP`
--

CREATE TABLE `CORP` (
  `CORP` varchar(255) DEFAULT NULL,
  `CORP_ID` int NOT NULL,
  `JOB_ID` int DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `USER_ID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `CORP`
--

INSERT INTO `CORP` (`CORP`, `CORP_ID`, `JOB_ID`, `EMAIL`, `USER_ID`) VALUES
('Entreprise A', 1, 41, 'entrepriseA@example.com', 1),
('Entreprise B', 2, 42, 'entrepriseB@example.com', 2);

-- --------------------------------------------------------

--
-- Structure de la table `TRAFFIC`
--

CREATE TABLE `TRAFFIC` (
  `MESSAGE` text,
  `DATE` datetime DEFAULT NULL,
  `EXPEDITEUR` varchar(255) DEFAULT NULL,
  `DESTINATAIRE` varchar(255) DEFAULT NULL,
  `JOB_ID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `TRAFFIC`
--

INSERT INTO `TRAFFIC` (`MESSAGE`, `DATE`, `EXPEDITEUR`, `DESTINATAIRE`, `JOB_ID`) VALUES
('Trafic important : réunion reportée à demain.', '2023-10-10 09:30:00', 'John Doe', 'Toute lequipe', 2001),
('URGENT : Problème technique sur le serveur.', '2023-10-11 14:15:00', 'IT Support', 'Departement informatique', 2002),
('Confirmation de rendez-vous pour lentretien.', '2023-10-12 11:00:00', 'Jane Smith', 'Candidat', 2003);

-- --------------------------------------------------------

--
-- Structure de la table `USERS`
--

CREATE TABLE `USERS` (
  `USER` varchar(25) DEFAULT NULL,
  `EMAIL` varchar(50) DEFAULT NULL,
  `PWD` varchar(25) DEFAULT NULL,
  `USER_ID` int NOT NULL,
  `JOB_ID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `USERS`
--

INSERT INTO `USERS` (`USER`, `EMAIL`, `PWD`, `USER_ID`, `JOB_ID`) VALUES
('John Doe', 'john.doe@example.com', 'johndoe123', 1, 41),
('Jane Smith', 'jane.smith@example.com', 'janesmith456', 2, 42),
('Michael Johnson', 'michael.johnson@example.com', 'michael123', 3, 42);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `ANNONCES`
--
ALTER TABLE `ANNONCES`
  ADD PRIMARY KEY (`JOB_ID`),
  ADD UNIQUE KEY `JOB_ID` (`JOB_ID`);

--
-- Index pour la table `CORP`
--
ALTER TABLE `CORP`
  ADD PRIMARY KEY (`CORP_ID`),
  ADD UNIQUE KEY `CORP_ID` (`CORP_ID`);

--
-- Index pour la table `USERS`
--
ALTER TABLE `USERS`
  ADD PRIMARY KEY (`USER_ID`),
  ADD UNIQUE KEY `USER_ID` (`USER_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
