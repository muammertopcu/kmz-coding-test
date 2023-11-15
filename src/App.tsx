import React, {ReactElement} from 'react';
import Router from './router/Router';
import ReduxProvider from './redux/ReduxProvider';
import Toast from 'react-native-toast-message';

function App(): ReactElement {
  return (
    <ReduxProvider>
      <Router />
      <Toast />
    </ReduxProvider>
  );
}

export default App;
