import React, { useState, useEffect } from 'react';

const Home = (props) => {
  const [listUsers, setUsers] = useState([]);
  const { usuarios } = listUsers || {};
  useEffect(() => {
    fetch('http://localhost:3000/usuarios')
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="container">
      <h2 className="list-users">Lista de usuarios</h2>
      <ul>
        {usuarios &&
          usuarios.map(({ id, client_id, nome, sobrenome, telefone }) => {
            return (
              <li key={ `${id} - ${nome}`}>
                <p>id: {id}</p>
                <p>client_id: {client_id}</p>
                <p>nome: {nome}</p>
                <p>sobrenome: {sobrenome}</p>
                <p>telefone: {telefone}</p>
              </li>
            );
          })}
      </ul>
      <button onClick={() => props.history.push('./step1') } className="btn-users">Adicionar Usuario</button>
    </div>
  );
};

export default Home;
