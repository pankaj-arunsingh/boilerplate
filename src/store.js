import noteReducer from "./reducers/noteReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//import filterReducer from "./reducers/filterReducer";

const reducer = combineReducers({ notes: noteReducer });
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
