export  function updateAction(state, payload) {
  return {
    ...state,
    data: {
      ...state.data,
      ...payload
    }
  };
}

export function updateAction2(state, payload) {
  return {
    ...state,
    data2: {
      ...state.data2,
      ...payload
    }
  };
}

