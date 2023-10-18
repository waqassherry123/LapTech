import authFlow from "../screens/Auth/Redux/saga";
import {spawn} from 'redux-saga/effects';

export default function* rootSaga () {
    yield spawn(authFlow)
}