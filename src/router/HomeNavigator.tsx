import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Products} from '@screens';

const Stack = createNativeStackNavigator();

const HomeNavigator = (): ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Categories'} component={Home} />
      <Stack.Screen name={'Products'} component={Products} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
