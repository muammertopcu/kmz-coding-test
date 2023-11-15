import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@screens';

const Stack = createNativeStackNavigator();

function Router(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Login'} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
