import { combineReducers, createStore } from "redux";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist/es/constants";
import gameResultsReducer from "./reducers/GameResultsReducer";

const reducers = combineReducers({ gameResults: gameResultsReducer});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
});

export const persistor = persistStore(store);
export default store;
