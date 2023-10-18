import { combineReducers } from "redux";
import authSlice from '../screens/Auth/Redux/slice';
import HomeSlice from '../screens/Home/Redux/slice'

const rootReducer = combineReducers({
   auth: authSlice.reducer,
   home: HomeSlice.reducer,
})
export default rootReducer;