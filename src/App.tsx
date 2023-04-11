import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from "./config/routes";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GameLobby">
        {routes.map((route, index) => (
          <Stack.Screen key={index} name={route.name} options={route.options}>
            {(props) => <route.component nameProp={route.name} {...props} />}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({});

export default App;
