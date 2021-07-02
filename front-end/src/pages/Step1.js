import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import { updateAction } from '../actions/updateAction';
import InputMask from 'react-input-mask';

const Step1 = (props) => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push('./step2');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Cadastro Cliente</h2>
      <label>
        CNPJ:
        <InputMask
          {...register('cnpj', {
            required: 'required',
            pattern: {
              value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
              message: 'Entered value does not match cnpj format',
            },
          })}
          mask="99.999.999/9999-99"
          defaultValue={state.data.cnpj}
        />
      </label>
      <label>
        Nome Fantasia:
        <input
          required
          {...register('nome_fantasia')}
          defaultValue={state.data.nome_fantasia}
        />
      </label>
      <label>
        Razao Social:
        <input
          required
          {...register('razao_social')}
          defaultValue={state.data.razao_social}
        />
      </label>
      <label>
        CEP:
        <InputMask
          {...register('cep', {
            required: 'required',
            pattern: {
              value: /[0-9]{5}-[\d]{3}/,
              message: 'Entered value does not match cep format',
            },
          })}
          mask="99999-999"
          defaultValue={state.data.cep}
        />
      </label>
      <label>
        Endereço:
        <input required {...register('endereco')} defaultValue={state.data.endereco} />
      </label>
      <label>
        Número:
        <input
          type="number"
          required
          {...register('numero')}
          defaultValue={state.data.numero}
        />
      </label>
      <label>
        Complemento:
        <input {...register('complemento')} defaultValue={state.data.complemento} />
      </label>
      <label>
        Bairro:
        <input required {...register('bairro')} defaultValue={state.data.bairro} />
      </label>
      <label>
        Cidade:
        <input required {...register('cidade')} defaultValue={state.data.cidade} />
      </label>
      <label>
        UF:
        <input required {...register('uf')} defaultValue={state.data.uf} />
      </label>
      <input className="btn submit" type="submit" />
    </form>
  );
};

export default withRouter(Step1);
