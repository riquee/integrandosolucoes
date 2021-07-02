CREATE DATABASE solucoes;
USE solucoes;

CREATE TABLE clientes (
	id INT AUTO_INCREMENT,
    cnpj CHAR(18) NOT NULL,
    nome_fantasia VARCHAR(100) NOT NULL,
    razao_social VARCHAR(100) NOT NULL,
    cep CHAR(9) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(100),
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    uf VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO clientes(cnpj, nome_fantasia, razao_social, cep, endereco, numero, bairro, cidade, uf) VALUES
('20.429.549/0001-03', 'Padaria Independencia', 'Padaria Independecia LTDA', '05664-000', 'Rua Melchior Giola', 73, 'Vila Andrade', 'São Paulo', 'São Paulo');

CREATE TABLE usuarios (
	id INT AUTO_INCREMENT,
    client_id INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    telefone CHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(15) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (client_id) REFERENCES clientes(id)
);

INSERT INTO usuarios(client_id, nome, sobrenome, telefone, email, senha) VALUES
(1, 'Henrique', 'Clementino', '(11) 98215-5855', 'strikedv@hotmail.com', '123456');