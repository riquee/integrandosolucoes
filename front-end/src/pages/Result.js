import React from "react";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../actions/updateAction";

const Result = (props) => {
  const { actions, state } = useStateMachine({updateAction});
  const { data: cliente, data2: usuario } = state;
  return (
    <div className="container">
      <h2>Usuario cadastrado com sucesso!</h2>
      <pre>{JSON.stringify({ cliente, usuario }, null, 2)}</pre>
      <button onClick={() => {
        actions.updateAction({});
        sessionStorage.clear();
        props.history.push('./')
      } } className="btn-users">Voltar</button>
    </div>
  );
};

export default Result;
