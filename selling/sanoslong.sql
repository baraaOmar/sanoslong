-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2019 at 06:59 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sanoslong`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(10) NOT NULL,
  `first` varchar(20) NOT NULL,
  `last` varchar(20) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `city` varchar(20) NOT NULL,
  `region` varchar(20) NOT NULL,
  `street` varchar(20) NOT NULL,
  `builging_num` varchar(20) NOT NULL,
  `facebook` varchar(30) NOT NULL,
  `insta` varchar(30) NOT NULL,
  `job_position` varchar(50) NOT NULL,
  `salary` double NOT NULL,
  `dateToCreateUser` date NOT NULL,
  `about` varchar(60) NOT NULL,
  `picture` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `first`, `last`, `pass`, `mobile`, `email`, `city`, `region`, `street`, `builging_num`, `facebook`, `insta`, `job_position`, `salary`, `dateToCreateUser`, `about`, `picture`) VALUES
(1, 'diana', 'kittani', '123', '08444', 'baraaa', 'tulkarm', 'ttuy', 'dsfr', 'gfd', 'tes', 'tess', 'co_', 0, '2019-12-10', 'hi web world ', 'hwsf'),
(2, 'diana', 'kittani', '123', '08444', 'baraaa', 'tulkarm', 'ttuy', 'dsfr', 'gfd', 'tes', 'tess', 'co_founder', 12345, '0000-00-00', 'im baraaaaaa', 'C:xampphtdocssellingimagesmodel_1');

-- --------------------------------------------------------

--
-- Table structure for table `buy`
--

CREATE TABLE `buy` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `mount` int(11) NOT NULL,
  `time` time NOT NULL,
  `price` double NOT NULL,
  `location` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `communication`
--

CREATE TABLE `communication` (
  `user_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `user_id` int(11) NOT NULL,
  `text` varchar(1000) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`user_id`, `text`, `date`) VALUES
(1, 'hello world i will reach', '2019-12-04'),
(2, 'hello web world i will reach', '2019-12-04');

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `food_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `calory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `has_per`
--

CREATE TABLE `has_per` (
  `admin_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `per_id` int(11) NOT NULL,
  `given_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `meal`
--

CREATE TABLE `meal` (
  `meal_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `img` varchar(1000) NOT NULL,
  `ingredients` varchar(100) NOT NULL,
  `calori` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `m_sale`
--

CREATE TABLE `m_sale` (
  `meal_id` int(11) NOT NULL,
  `value` double NOT NULL,
  `timeS` time NOT NULL,
  `timeF` time NOT NULL,
  `dateS` date NOT NULL,
  `dateF` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order_meal`
--

CREATE TABLE `order_meal` (
  `date` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `meal_id` int(11) NOT NULL,
  `price` double NOT NULL,
  `time` time NOT NULL,
  `location` varchar(40) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `period`
--

CREATE TABLE `period` (
  `period_id` int(11) NOT NULL,
  `period` int(11) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `period`
--

INSERT INTO `period` (`period_id`, `period`, `price`) VALUES
(1, 3, 1222),
(2, 6, 33333),
(3, 9, 88888),
(4, 12, 999999);

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `per_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `pro_id` int(11) NOT NULL,
  `name` varchar(35) NOT NULL,
  `price` double NOT NULL,
  `img` varchar(1000) NOT NULL,
  `vidio` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `p_sale`
--

CREATE TABLE `p_sale` (
  `pro_id` int(11) NOT NULL,
  `value` double NOT NULL,
  `timeS` time NOT NULL,
  `timeF` time NOT NULL,
  `dateT` date NOT NULL,
  `dateF` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `p_sub`
--

CREATE TABLE `p_sub` (
  `date_start` date NOT NULL,
  `time_start` time NOT NULL,
  `user_id` int(11) NOT NULL,
  `period_id` int(11) NOT NULL,
  `approved` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `p_sub`
--

INSERT INTO `p_sub` (`date_start`, `time_start`, `user_id`, `period_id`, `approved`) VALUES
('2019-12-03', '08:03:06', 1, 1, 0),
('2019-02-03', '08:03:06', 2, 2, 0),
('2019-07-03', '08:03:06', 1, 3, 0),
('2019-12-10', '23:00:00', 2, 1, 1),
('2019-12-10', '23:00:00', 2, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `subscrip`
--

CREATE TABLE `subscrip` (
  `type` varchar(40) NOT NULL,
  `date` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(10) NOT NULL,
  `f_name` varchar(20) NOT NULL,
  `l_name` varchar(20) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `regoin` varchar(20) NOT NULL,
  `street` varchar(20) NOT NULL,
  `build_num` varchar(20) NOT NULL,
  `subscription` tinyint(1) NOT NULL,
  `profile_picture` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `f_name`, `l_name`, `pass`, `email`, `mobile`, `city`, `regoin`, `street`, `build_num`, `subscription`, `profile_picture`) VALUES
(1, 'baraa', 'omar', '123', 'baraa', '5345', 'tulkarm', 'alhaara', 'mus', '', 1, 'images/person_3.jpg'),
(2, 'roa', 'omar', '123', 'baraa', '5345', 'tulkarm', 'alhaara', 'mus', '', 1, 'images/person_2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `weight`
--

CREATE TABLE `weight` (
  `weight` double NOT NULL,
  `date` date NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `buy`
--
ALTER TABLE `buy`
  ADD KEY `buy_user` (`user_id`),
  ADD KEY `buy_product` (`product_id`);

--
-- Indexes for table `communication`
--
ALTER TABLE `communication`
  ADD KEY `com_user` (`user_id`),
  ADD KEY `com_admain` (`admin_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD KEY `feedback_user` (`user_id`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`food_id`);

--
-- Indexes for table `has_per`
--
ALTER TABLE `has_per`
  ADD KEY `has_admin` (`admin_id`),
  ADD KEY `has_per` (`per_id`);

--
-- Indexes for table `meal`
--
ALTER TABLE `meal`
  ADD PRIMARY KEY (`meal_id`);

--
-- Indexes for table `m_sale`
--
ALTER TABLE `m_sale`
  ADD KEY `msale_meal` (`meal_id`);

--
-- Indexes for table `order_meal`
--
ALTER TABLE `order_meal`
  ADD KEY `om_user` (`user_id`),
  ADD KEY `om_meal` (`meal_id`);

--
-- Indexes for table `period`
--
ALTER TABLE `period`
  ADD PRIMARY KEY (`period_id`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`per_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pro_id`);

--
-- Indexes for table `p_sale`
--
ALTER TABLE `p_sale`
  ADD KEY `psale_product` (`pro_id`);

--
-- Indexes for table `p_sub`
--
ALTER TABLE `p_sub`
  ADD KEY `psub_period` (`period_id`),
  ADD KEY `psub_user` (`user_id`);

--
-- Indexes for table `subscrip`
--
ALTER TABLE `subscrip`
  ADD KEY `sub_food` (`food_id`),
  ADD KEY `sub_user` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `weight`
--
ALTER TABLE `weight`
  ADD KEY `weight_user` (`user_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `buy`
--
ALTER TABLE `buy`
  ADD CONSTRAINT `buy_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`pro_id`),
  ADD CONSTRAINT `buy_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `communication`
--
ALTER TABLE `communication`
  ADD CONSTRAINT `com_admain` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`);

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `has_per`
--
ALTER TABLE `has_per`
  ADD CONSTRAINT `has_per` FOREIGN KEY (`per_id`) REFERENCES `permission` (`per_id`);

--
-- Constraints for table `m_sale`
--
ALTER TABLE `m_sale`
  ADD CONSTRAINT `msale_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`meal_id`);

--
-- Constraints for table `order_meal`
--
ALTER TABLE `order_meal`
  ADD CONSTRAINT `om_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`meal_id`),
  ADD CONSTRAINT `om_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `p_sale`
--
ALTER TABLE `p_sale`
  ADD CONSTRAINT `psale_product` FOREIGN KEY (`pro_id`) REFERENCES `product` (`pro_id`);

--
-- Constraints for table `p_sub`
--
ALTER TABLE `p_sub`
  ADD CONSTRAINT `psub_period` FOREIGN KEY (`period_id`) REFERENCES `period` (`period_id`),
  ADD CONSTRAINT `psub_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `subscrip`
--
ALTER TABLE `subscrip`
  ADD CONSTRAINT `sub_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `weight`
--
ALTER TABLE `weight`
  ADD CONSTRAINT `weight_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
