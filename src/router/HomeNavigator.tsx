import React, {ReactElement} from 'react';
import {Home} from '@screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeNavigator = (): ReactElement => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Home'} component={Home} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
