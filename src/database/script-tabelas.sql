-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

create database naruto;
use naruto;

create table usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
suaVila varchar(45)
);

create table mydatabook(
idMydatabook int primary key auto_increment,
nomePersonagem varchar(45),
forca varchar(45),
velocidade varchar(45),
resistencia varchar(45),
chakra varchar(45),
fkUsuario int,
foreign key (fkUsuario) references usuario (id)
);

CREATE TABLE aviso (
id INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(100),
descricao VARCHAR(150),
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);