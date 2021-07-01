const connection = require('./connection');

const findById = async (id) => {
  const [cliente] = await connection.execute('SELECT * FROM clientes WHERE id = ?', [id]);
  if (!cliente.length) return null;
  return cliente;
};

const getAll = async () => {
  const [clientes] = await connection.execute('SELECT * FROM clientes');
  return clientes;
};

const create = async (clientes) => {
  const [{ insertId: id }] = await connection.execute(
    `INSERT INTO clientes(cnpj, nome_fantasia, razao_social, cep, endereco, numero, complemento, bairro, cidade, uf) VALUES
  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    Object.values(clientes),
  );
  return {
    id,
    ...clientes,
  };
};

module.exports = {
  getAll,
  create,
  findById,
};
