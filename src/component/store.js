import { legacy_createStore as createStore , applyMiddleware} from "redux";
import reducer from "./redux-thunk/userReducer";
import thunk from "redux-thunk";

const store = createStore(reducer,applyMiddleware(thunk));

export default store;