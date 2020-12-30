import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};
const enhancedReducer = persistReducer(persistConfig, reducers);
export default createStore(enhancedReducer, applyMiddleware(logger));
