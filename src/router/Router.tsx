import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

function Router(): ReactElement {
  const {token} = useSelector((state: RootState) => state.authSlice);

  return (
    <NavigationContainer>
      {token ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default Router;
