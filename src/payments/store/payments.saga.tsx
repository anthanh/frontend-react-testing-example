import { call, put, throttle } from "redux-saga/effects";

import actions, { SET_IBAN } from "./payments.actions";
import { validateIbanChecksum } from "../services/payments.service";

export function* validateIban({ payload }: { payload: string }) {
  try {
    yield put(actions.setLoading(true));
    const valid = yield call(validateIbanChecksum, payload);
    yield put(actions.setValid(valid));
  } catch (e) {
    console.warn("request:error", e);
  }
  yield put(actions.setLoading(false));
}

export function* watchIban() {
  yield throttle<any>(500, SET_IBAN, validateIban);
}

export const saga = {
  validateIban,
  watchIban
};
