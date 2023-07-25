import { combineReducers } from "redux";
import authSlice from '../screens/Auth/IntroSlider/Redux/slice';

const rootReducer = combineReducers({
   auth:authSlice.reducer
})
export default rootReducer;