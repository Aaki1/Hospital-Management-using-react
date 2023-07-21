-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2023 at 10:03 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mern`
--

-- --------------------------------------------------------

--
-- Table structure for table `appo`
--

CREATE TABLE `appo` (
  `name` text NOT NULL,
  `age` text NOT NULL,
  `gender` text NOT NULL,
  `doa` text NOT NULL,
  `phn` text NOT NULL,
  `email` text NOT NULL,
  `addr` text NOT NULL,
  `des` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appo`
--

INSERT INTO `appo` (`name`, `age`, `gender`, `doa`, `phn`, `email`, `addr`, `des`) VALUES
('20CS2701 Akash.N', '23', 'Male', '21/02/2003', '2345', 'akashasaaki02@gmail.com', '2991, East 2nd Street', 'sffs'),
('sss', '33', 'Male', '22/02/2023', '234567', 'ss@gmail.com', 'jbfewfwefw', 'normal check up'),
('vvv', '21', 'Male', '11/11/2222', '2345678', 'dd@gmail.com', 'gfrggrfyg', 'fgrgfgrifg'),
('dd', '21', 'Female', '21/22/2202', '2345678', 'dd@gmail.com', 'ftegryhyr', 'svrfrfr'),
('ss', '21', 'Female', '11/22/2222', '12345678', 'aa@gmail.com', 'ffrgthy', 'efrgtegte');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
