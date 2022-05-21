import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '@/MayIHelpU/Auth/signUp';
import SignIn from '@/MayIHelpU/Auth/signIn';

const Stack = createStackNavigator()

const AuthNavigator = () =>
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Login" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>

export default AuthNavigator
