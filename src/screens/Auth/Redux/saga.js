import { put, call, takeEvery, all } from 'redux-saga/effects';
import authSlice from './slice';
import authApi from './api';
import storage from '../../../utils/storage';
import { navigate } from '../../../utils/navigate';



export default function* authFlow() {
    yield all([
        takeEvery(authSlice.actions.login.type, login),
        // takeEvery(authSlice.actions.signUp.type, signUp)
    ])
}
// const navigation = useNavigation()

function* login({payload}){
    try {
        const response = yield call (authApi.login, payload);
        console.log("response here",response)
        if (response.data.isAuthenticated) {
            yield navigate('Home', {
              userData: response.data.truvyData,
            });
            storage.setItem('user', response.data);
            yield put(authSlice.actions.loginSuccess(response.data));
          } else {
            yield put(authSlice.actions.loginFailure());
        }
        
    }
    catch (error) {
        yield put(authSlice.actions.loginFailure());
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