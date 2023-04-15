import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./config/routes";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";

const Stack = createNativeStackNavigator();

const App = () => {


  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="GameLobby">
            {routes.map((route, index) => (
              <Stack.Screen key={index} name={route.name} options={route.options}>
                {(props) => <route.component nameProp={route.name} {...props} />}
              </Stack.Screen>
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>


  );
};

const styles = StyleSheet.create({});

export default App;
