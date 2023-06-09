import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducers from "./reducers/Auth-reducer";
import filterReducer from "./reducers/filter-reducer";
import contentReducers from "./reducers/main-content-reducer";
import userReducers from "./reducers/user-reducer";


const rootReducer = combineReducers({
    auth: authReducers,
    events: contentReducers,
    user: userReducers,
    filterEvent: filterReducer,

})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))