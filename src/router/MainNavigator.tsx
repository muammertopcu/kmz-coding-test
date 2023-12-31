import React, {ReactElement} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {toggleMenu} from '../redux/slices/categorySlice';
import HomeNavigator from './HomeNavigator';
import {Cart} from '@screens';

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

const headerLeftIcon = (name: string, onPress: () => void) => {
  return () => <Icon name={name} size={30} onPress={onPress} />;
};

const MainNavigator = (): ReactElement => {
  const dispatch = useDispatch();

  const openLeftMenu = () => dispatch(toggleMenu());

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000',
      }}>
      <Tab.Screen
        name={'Home'}
        component={HomeNavigator}
        options={{
          tabBarIcon: tabBarIcon('home'),
          headerLeft: headerLeftIcon('menu', openLeftMenu),
          headerTitle: '',
        }}
      />

      <Tab.Screen
        name={'Cart'}
        component={Cart}
        options={{
          tabBarIcon: tabBarIcon('shopping-cart'),
          headerTitle: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
