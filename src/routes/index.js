import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export const Router = ({ isLoggedIn }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}
      >
        {!isLoggedIn ? (
          <RootStack.Screen
            name="Auth"
            component={AuthStack}
            options={{
              animationEnabled: false,
            }}
          />
        ) : (
          <RootStack.Screen
            name="App"
            component={AppStack}
            options={{
              animationEnabled: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Router);
