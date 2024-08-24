import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSpaceDataService } from "./spaceService";
import { USER_FETCH_FAILURE, USER_FETCH_SUCCEEDED } from "./spaceSlice";

function* getSpaceData() {
  try {
    const { data } = yield call(fetchSpaceDataService);

    yield put({ type: USER_FETCH_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: USER_FETCH_FAILURE, error });
  }
}

function* spaceSagaHome() {
  yield takeLatest("SPACE_DATA_REQUESTED", getSpaceData);
}

export default spaceSagaHome;
