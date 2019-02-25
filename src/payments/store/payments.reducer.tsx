import { paymentInitialState } from "./payments.store";
import { SET_LOADING, SET_IBAN, SET_VALID } from "./payments.actions";

export function paymentsReducer(state = paymentInitialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING: {
      return { ...state, loading: payload };
    }
    case SET_IBAN: {
      return { ...state, iban: payload };
    }
    case SET_VALID: {
      return { ...state, valid: payload };
    }
    default:
      return { ...state };
  }
}

export default paymentsReducer;
