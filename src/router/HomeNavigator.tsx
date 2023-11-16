import React, {ReactElement} from 'react';
import {Home} from '@screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

interface ITabBarIcon {
  color: string;
  size: number;
}

const tabBarIcon = (name: string) => {
  return ({color, size}: ITabBarIcon) => (
    <Icon name={name} color={color} size={size} />
  );
};

const headerLeftIcon = (name: string) => {
  return () => <Icon name={name} size={30} />;
};

const HomeNavigator = (): ReactElement => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: tabBarIcon('home'),
          headerLeft: headerLeftIcon('menu'),
          headerTitle: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
