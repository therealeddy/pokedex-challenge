export function getStatusRequest(data) {
  return {
    type: '@pokemon/GET_STATUS_REQUEST',
    payload: {
      id: data,
    },
  };
}

export function getStatusSuccess(data) {
  return {
    type: '@pokemon/GET_STATUS_SUCCESS',
    payload: data,
  };
}
