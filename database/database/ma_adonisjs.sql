-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 20 août 2022 à 03:00
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ma_adonisjs`
--

-- --------------------------------------------------------

--
-- Structure de la table `adonis_schema`
--

DROP TABLE IF EXISTS `adonis_schema`;
CREATE TABLE IF NOT EXISTS `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  `migration_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(2, 'database/migrations/1660370932683_anime', 1, '2022-08-18 02:52:55'),
(5, 'database/migrations/1660796952811_users', 2, '2022-08-18 04:33:39');

-- --------------------------------------------------------

--
-- Structure de la table `adonis_schema_versions`
--

DROP TABLE IF EXISTS `adonis_schema_versions`;
CREATE TABLE IF NOT EXISTS `adonis_schema_versions` (
  `version` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `adonis_schema_versions`
--

INSERT INTO `adonis_schema_versions` (`version`) VALUES
(2);

-- --------------------------------------------------------

--
-- Structure de la table `anime`
--

DROP TABLE IF EXISTS `anime`;
CREATE TABLE IF NOT EXISTS `anime` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `nb_episode` int(11) NOT NULL,
  `date_sortie` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `anime`
--

INSERT INTO `anime` (`id`, `titre`, `nb_episode`, `date_sortie`, `created_at`, `updated_at`) VALUES
(1, 'One Piece', 1025, '1999-10-20', '2022-08-18 02:53:49', '2022-08-18 02:53:49'),
(2, 'Dragon Ball Z', 55, '2022-08-12', '2022-08-18 02:59:30', '2022-08-18 03:01:46'),
(3, 'Naruto', 12052, '2022-08-12', '2022-08-18 03:08:54', '2022-08-18 03:08:54');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(180) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
