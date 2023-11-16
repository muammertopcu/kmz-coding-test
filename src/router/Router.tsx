import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

function Router(): ReactElement {
  const {token} = useSelector((state: RootState) => state.authSlice);

  return (
    <NavigationContainer>
      {token ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default Router;
