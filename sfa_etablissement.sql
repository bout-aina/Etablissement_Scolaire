-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 26 août 2022 à 13:01
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `sfa_etablissement`
--

-- --------------------------------------------------------

--
-- Structure de la table `departement`
--

CREATE TABLE `departement` (
  `id` bigint(20) NOT NULL,
  `chef` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `nomdep` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `departement`
--

INSERT INTO `departement` (`id`, `chef`, `description`, `nomdep`) VALUES
(1, 'Mr idriss', 'génie informatique .', 'Génie Informatique'),
(2, 'Mme boutaina', 'génie civil', 'Génie civil'),
(3, 'Mmme oumaima', 'Économie-gestion', 'Économie-gestion'),
(4, 'Mme hajar', 'Sciences humaines et sociales', 'Sciences humaines et sociales'),
(6, 'Mrs benjrada', 'Droit et sciences politiques', 'Droit et sciences politiques');

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE `etudiant` (
  `id` bigint(20) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `telpar` varchar(255) DEFAULT NULL,
  `telper` varchar(255) DEFAULT NULL,
  `departement_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `etudiant` (`id`, `adresse`, `etat`, `image`, `mail`, `nom`, `sex`, `telpar`, `telper`, `departement_id`) VALUES
(1, 'agadir', 'cycle2', NULL, 'idriss@gmail.com', 'boutaina ', 'Femme', '+212636388622', '+212636388619', 2),
(2, 'idriss', 'cycle2', NULL, 'oumaima@gmail.com', 'oumaima', 'Femme', '+212636388622', '+212636388619', 2),
(3, 'idriss', 'cycle1', NULL, 'naour_boutaina@emsi-edu.ma', 'idriss', 'Homme', '+212636388622', '+212636388619', 2),
(4, 'reka', 'cycle1', NULL, 'idriss@gmail.com', 'anasse', 'Homme', '+212636388622', '+212636388619', 4),
(5, 'oumaima', 'prepa', NULL, 'ere@gmail.com', 'abderrahmane', 'Homme', '+212636388622', '+212636388619', 6),
(6, 'idriss', 'cycle1', NULL, 'idriss@gmail.com', 'oumaima3', 'Femme', '+212636388611', '+212636388619', 1),
(7, 'reka', 'prepa', NULL, 'idriss@gmail.com', 'idriss6', 'Homme', '+212636388622', '+212636388619', 3),
(8, 'idriss', 'cycle1', NULL, 'idriss@gmail.com', 'rekaa', 'Homme', '+212636388622', '+212636388619', 2),
(10, 'reka', 'prepa', NULL, 'ere@gmail.com', 'rekaa', 'Femme', '+212636388611', '+212636388619', 4);

-- --------------------------------------------------------

--
-- Structure de la table `event`
--

CREATE TABLE `event` (
  `id` bigint(20) NOT NULL,
  `date` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `heure` varchar(255) DEFAULT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `event`
--

INSERT INTO `event` (`id`, `date`, `description`, `heure`, `lieu`, `nom`) VALUES
(1, '2022-08-08', 'events 222.....', '10:56AM', 'agadir', 'startup'),
(2, '2022-08-11', 'new one lets go', '23:56PM', 'agadir', 'New one'),
(3, '2022-12-24', 'uuuuujjjjjj', '10:56AM', 'agadir', 'test'),
(4, '2022-08-19', 'reka.......', '10:56AM', 'agadir', 'rekaa'),
(5, '2022-11-26', 'test 123444', '23:56PM', 'agadir', 'test');

-- --------------------------------------------------------

--
-- Structure de la table `module`
--

CREATE TABLE `module` (
  `id` bigint(20) NOT NULL,
  `coeff` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `taux_horraire` varchar(255) DEFAULT NULL,
  `profs_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `module`
--

INSERT INTO `module` (`id`, `coeff`, `nom`, `taux_horraire`, `profs_id`) VALUES
(1, '2', 'Java', '23', 1),
(2, '3', 'POO', '43', 2),
(3, '2', 'francais', '22', 8);

-- --------------------------------------------------------

--
-- Structure de la table `profs`
--

CREATE TABLE `profs` (
  `id` bigint(20) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `nom_complet` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `departement_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `profs`
--

INSERT INTO `profs` (`id`, `adresse`, `mail`, `nom_complet`, `tel`, `departement_id`) VALUES
(1, 'agadir', 'oumaima@gmail.com', 'oumaima', '+212064567893', 1),
(2, 'agadir', 'naour_boutaina@emsi-edu.ma', 'boutaina', '+212089782222', 2),
(3, 'casablanca', 'idriss@gmail.com', 'idriss', '+212089782222', 3),
(4, 'agadir', 'reka@gmail.com', 'rekaa', '+212645678931', 4),
(6, 'casablanca', 'ere@gmail.com', 'hajar', '+212645678930', 6),
(7, 'agadir', 'leila@gmail.com', 'leila', '+212645678930', 1),
(8, 'casablanca', 'ere@gmail.com', 'anasse', '+212064567893', 3),
(9, 'agadir', 'test@gmail.com', 'abderrahmane', '+212064567893', 6);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `departement`
--
ALTER TABLE `departement`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKhjwe2f8albkdo1w9dm7kve9ww` (`departement_id`);

--
-- Index pour la table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKecwqncaylsd6p4o6kr2p192d6` (`profs_id`);

--
-- Index pour la table `profs`
--
ALTER TABLE `profs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKlvffpfame6p9ljplkijkutguh` (`departement_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `departement`
--
ALTER TABLE `departement`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `etudiant`
--
ALTER TABLE `etudiant`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `event`
--
ALTER TABLE `event`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `module`
--
ALTER TABLE `module`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `profs`
--
ALTER TABLE `profs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `FKhjwe2f8albkdo1w9dm7kve9ww` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`);

--
-- Contraintes pour la table `module`
--
ALTER TABLE `module`
  ADD CONSTRAINT `FKecwqncaylsd6p4o6kr2p192d6` FOREIGN KEY (`profs_id`) REFERENCES `profs` (`id`);

--
-- Contraintes pour la table `profs`
--
ALTER TABLE `profs`
  ADD CONSTRAINT `FKlvffpfame6p9ljplkijkutguh` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
