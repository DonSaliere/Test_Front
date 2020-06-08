import { createStore, combineReducers} from "redux";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    auth: authReducer
});


let store  = createStore(reducers);

export default store;
window.store = store;