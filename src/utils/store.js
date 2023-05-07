import {configureStore} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistStore,persistReducer} from "redux-persist";

import groceryReducer from "./slices";

export const store = configureStore({
    reducer: {
        app: persistReducer({
            key: "root",
            storage: AsyncStorage,
            timeout: null
        }, groceryReducer),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);