
/* para workbench - local - desenvolvimento */

create DATABASE arte;

USE arte;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    telefone int
);

create table tbArte(
idarte int primary key auto_increment,
arte varchar(50)
);

create table usuarioVoto (
idvoto int primary key auto_increment,
fkusuario int,
fkarte int,
foreign key (fkusuario) references usuario(id),
foreign key (fkarte) references tbArte(idarte)
);

insert into tbArte
value (1, "Escultura"),
      (2, "Nouveau"),
      (3, "barroco");
      
select * from usuarioVoto;

select ar.arte, count(fkarte) as "Total de artes" from usuarioVoto us
join tbArte ar on us.fkarte = ar.idarte
where idarte = 1;

select ar.arte, count(fkarte) as "Total de artes" from usuarioVoto us
join tbArte ar on us.fkarte = ar.idarte
where idarte = 2;

select ar.arte, count(fkarte) as "Total de artes" from usuarioVoto us
join tbArte ar on us.fkarte = ar.idarte
where idarte = 3;

select fkarte from usuarioVoto;
