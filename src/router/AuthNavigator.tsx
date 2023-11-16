import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '@screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = (): ReactElement => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
