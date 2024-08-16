import { combineReducers } from "redux";
import deliverablesReducer from "./deliverablesSlice";

export const reducers = combineReducers({
     deliverables: deliverablesReducer,
});
