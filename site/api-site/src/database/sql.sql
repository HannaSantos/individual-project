
/* para workbench - local - desenvolvimento */
CREATE DATABASE acquatec;

USE acquatec;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
); 

CREATE TABLE medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	temperatura DECIMAL,
	umidade DECIMAL,
	momento DATETIME,
	fk_aquario INT
);


CREATE DATABASE arte;

USE arte;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    telefone varchar(13)
);


create DATABASE arte;

USE arte;

create table votacao(
idvota int primary key auto_increment,
arte varchar(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    telefone varchar(13),
    fkvota int,
    foreign key (fkvota) references votacao(idvota)
);

insert into votacao
value (1, "Escultura"),
      (2, "Nouveau"),
      (3, "barroco");
      
update usuario set fkvota = 1 where id = 1;

select fkvota from usuario;

select count(fkvota) as "Total" from usuario;

select * from usuario;
select * from votacao;