// import { configureStore } from "@reduxjs/toolkit";
// import billReducer from "./billSlice";

// const store = configureStore({
//   reducer: {
//     bill: billReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import billReducer from "./billSlice"; 
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  bill: billReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
