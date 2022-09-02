import { applyMiddleware, combineReducers, configureStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default store = configureStore(
    combineReducers({}),
    composeWithDevTools(applyMiddleware(thunk))
)