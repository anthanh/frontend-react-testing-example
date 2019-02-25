import { expectSaga } from "redux-saga-test-plan";
import { validateIban } from "./payments.saga";
import { SET_LOADING, SET_VALID } from "./payments.actions";
import { call } from "redux-saga/effects";
import { validateIbanChecksum } from "../services/payments.service";

describe("Payments saga", () => {
  it("when iban is invalid, sets validity to false", () => {
    expectSaga(validateIban, { payload: "iban" })
      .put({
        type: SET_LOADING,
        payload: true
      })
      .provide([[call(validateIbanChecksum, "iban"), false]])
      .put({
        type: SET_VALID,
        payload: false
      })
      .put({
        type: SET_LOADING,
        payload: false
      });
  });

  it("when iban is valid, sets validity to true", () => {
    expectSaga(validateIban, { payload: "iban" })
      .put({
        type: SET_LOADING,
        payload: true
      })
      .provide([[call(validateIbanChecksum, "iban"), true]])
      .put({
        type: SET_VALID,
        payload: true
      })
      .put({
        type: SET_LOADING,
        payload: false
      });
  });

});
