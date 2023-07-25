import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware  from "redux-saga";
import rootReducer from "./Reducer";
import Sagas  from "./Sagas";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : rootReducer,
    middleware : [SagaMiddleware]
})

SagaMiddleware.run(Sagas);
export default store;