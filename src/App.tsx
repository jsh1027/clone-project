import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Styled from 'styled-components/native';
import Permission from '~/Screens/Permission'
import Login from '~/Screens/Login';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Container = Styled.SafeAreaView`
  flex: 1;
  border: 2px solid yellow;
`;

const App = () => {

  SplashScreen.hide();

  return (
    <Container>        
      <Permission />
      <Login />
    </Container>
  );
};
export default App;
