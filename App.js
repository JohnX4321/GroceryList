import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store,persistor} from "./src/utils/store";
import AppContainer from "./src/utils/AppContainer";

export default function App() {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
          </PersistGate>
      </Provider>
  );
}


