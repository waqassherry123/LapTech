import authSaga from "../screens/Auth/IntroSlider/Redux/saga";
import {spawn} from 'redux-saga/effects';

export default function* rootSaga () {
    yield spawn (authSaga)
}