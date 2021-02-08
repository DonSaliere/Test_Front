import { createStore, combineReducers} from "redux";
import authReducer from "./auth-reducer";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
    auth: authReducer,
    news: newsReducer
});

let store  = createStore(reducers);

export default store;