import * as React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
const Stack = createStackNavigator();

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home JPI",
              headerStyle: {
                backgroundColor: "white",
                backgroundColor: "#111111",
                elevation: 0,
              },
              headerTintColor: "#2289dc",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerLeft: () => (
                <Image
                  source={require("./assets/favicon.png")}
                  style={{ left: 15, height: 45, width: 45 }}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
