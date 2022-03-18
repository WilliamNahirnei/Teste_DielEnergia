

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema diel
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema diel
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `diel` DEFAULT CHARACTER SET utf8 ;
USE `diel` ;

-- -----------------------------------------------------
-- Table `diel`.`task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `diel`.`task` (
  `idTask` INT NOT NULL AUTO_INCREMENT,
  `titleTask` VARCHAR(50) NOT NULL,
  `descriptionTask` VARCHAR(150) NULL,
  `startDateTask` DATETIME NOT NULL,
  `endDateTask` DATETIME NOT NULL,
  `statusTask` ENUM('SCHEDULED', 'IN PROGRESS', 'FINISHED', 'DELAYED') NOT NULL DEFAULT 'SCHEDULED',
  PRIMARY KEY (`idTask`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
