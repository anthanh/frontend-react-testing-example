import { PaymentsStore, paymentInitialState } from "../payments/store/payments.store";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import { saga } from "../payments/store/payments.saga";


export interface AppStore {
  payment: PaymentsStore
}

export const initialState: AppStore = {
  payment: paymentInitialState
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(
  reducers,
  {...initialState} as any,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(saga.watchIban)

export default store