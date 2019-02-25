import { combineReducers } from "redux";
import paymentsReducer from "../payments/store/payments.reducer";

const reducers = combineReducers({
  payment: paymentsReducer
})

export default reducers