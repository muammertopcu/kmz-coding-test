import React, {ReactElement} from 'react';
import {Home} from '@screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Entypo";

const Tab = createBottomTabNavigator();

const HomeNavigator = (): ReactElement => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Home'} component={Home} options={{
          tabBarIcon: ({color, size}) => <Icon name={'home'} color={color} size={size} />,
          headerLeft: () => <Icon name={'menu'} size={30} />,
          headerTitle: '',
      }} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
