import { all } from "redux-saga/effects";
import spaceSagaHome from "./spaceSaga";

export default function* rootSaga() {
  yield all([spaceSagaHome()]);
}
