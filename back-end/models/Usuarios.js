const connection = require('./connection');

const findById = async (id) => {
  const [cliente] = await connection.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
  if (!cliente.length) return null;
  return cliente;
};

const getAll = async () => {
  const [usuarios] = await connection.execute('SELECT * FROM usuarios');
  return usuarios;
};

const create = async (usuarios) => {
  const [{ insertId: id }] = await connection.execute(
    `INSERT INTO usuarios(client_id, nome, sobrenome, telefone, email, senha) VALUES
    (?, ?, ?, ?, ?, ?)`,
    Object.values(usuarios),
  );
  return {
    id,
    ...usuarios,
  };
};

module.exports = {
  getAll,
  create,
  findById,
};
