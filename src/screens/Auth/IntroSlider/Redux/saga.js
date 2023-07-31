import { put, call, takeEvery, all } from 'redux-saga/effects';
import authSlice from './slice';
import authApi from './api'


export default function* authFlow() {
    yield all([
        takeEvery(authSlice.actions.login.type, login),
        takeEvery(authSlice.actions.signUp.type, signUp)
    ])
}

function* login({ payload }) {
    try {
        const response = yield call(authApi.login, payload);
        console.log("here response", response.data)
        if (response.data.status == true) {
            yield put(authSlice.actions.loginSuccess(response.data))
        }
        else {
            yield put(authSlice.actions.loginFailure({ error: response.error }))
        }
    }
    catch (error) {
        // yield put(authSlice.actions.loginFailure({ error: response.error }))
        console.log(error)
    }

}

function* signUp({ payload }) {
    try {
        const response = yield call(authApi.signup, payload);
        if (response.status == true) {
            yield put(signUpSuccess(user))
            console.log(user)
        }
        else {
            yield put(signUpFailure(error.message))
        }
    }
    catch (error) {
        yield put(signUpFailure(error.message))
    }

}