const connection = require('./connection');

const getAll = async () => {
  const [clientes] = await connection.execute('SELECT * FROM clientes');
  return clientes;
};

const create = async (client) => {
  await connection.execute(
    `
  INSERT INTO clientes(cnpj, nome_fantasia, razao_social, cep, endereco, numero, bairro, cidade, uf) VALUES
  (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `,
    [...client],
  );
};

module.exports = {
  getAll,
};
