import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Styled from 'styled-components/native';
import Permission from '~/Screens/Permission'

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const App = () => {

  SplashScreen.hide();

  return (
    <Container>
      <Permission />
    </Container>
  );
};
export default App;
