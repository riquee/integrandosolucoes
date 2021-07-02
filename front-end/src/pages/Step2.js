import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import { updateAction2 } from '../actions/updateAction';
import InputMask from 'react-input-mask';
import axios from 'axios';

const Step2 = (props) => {
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateAction2 });
  const onSubmit = async (data) => {
    try {
      actions.updateAction2(data);
      const {
        data: { id },
      } = await axios({
        method: 'post',
        url: 'http://localhost:3000/clientes',
        data: state.data,
      });
      await axios({
        method: 'post',
        url: 'http://localhost:3000/usuarios',
        data: {
          client_id: id,
          ...data,
        },
      });
      setError(false);
      props.history.push('./result');
    } catch ({ response }) {
      console.log(response.message);
      setError(true);
    }
  };

  if (error) {
    return (
      <div className="container">
        <h2 className="title-error">Não foi possivel se cadastrar</h2>
        <button onClick={() => setError(false)} type="button" className="btn back">
          Voltar
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Cadastro Usuario</h2>
      <label>
        Nome:
        <input required {...register('nome')} defaultValue={state.data.nome} />
      </label>
      <label>
        Sobrenome:
        <input required {...register('sobrenome')} defaultValue={state.data.sobrenome} />
      </label>
      <label>
        Telefone:
        <InputMask
          {...register('telefone', {
            required: 'required',
            pattern: {
              value: /\(\d{2}\)\s\d{4,5}-\d{4}/,
              message: 'Entered value does not match telefone format',
            },
          })}
          mask="(99) 99999-9999"
          defaultValue={state.data.telefone}
        />
      </label>
      <label>
        Email:
        <input
          required
          type="email"
          {...register('email')}
          defaultValue={state.data.email}
        />
      </label>
      <label>
        Senha:
        <input
          required
          type="password"
          {...register('senha')}
          defaultValue={state.data.senha}
        />
      </label>
      <button onClick={() => props.history.push('./step1')} className="btn back">
        Voltar
      </button>
      <input className="btn submit" type="submit" />
    </form>
  );
};

export default withRouter(Step2);
