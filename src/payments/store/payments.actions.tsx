export const SET_IBAN = "payments/SET_IBAN";
export const SET_VALID = "payments/SET_VALID";
export const SET_LOADING = "payments/SET_LOADING";

export function setIban(payload: string) {
  return {
    type: SET_IBAN,
    payload: payload
  };
}

export function setValid(payload: boolean) {
  return {
    type: SET_VALID,
    payload: payload
  };
}

export function setLoading(payload: boolean) {
  return {
    type: SET_LOADING,
    payload: payload
  };
}

const actions = {
  setIban,
  setValid,
  setLoading
};

export default actions
