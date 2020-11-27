import React from 'react';
import Styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import Navigator from '~/Screens/Navigator';
import {UserContextProvider} from '~/Context/User';



import Intro from '~/Screens/Intro';
import { StackNavigationProp } from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};



const SafeAreaView = Styled.SafeAreaView`
  flex: 1;
`;

interface Props {}
const App = ({}: Props) => {

  SplashScreen.hide();

  return (
    <SafeAreaView >
      <Intro />
      {/* <UserContextProvider>
        <Navigator />    
      </UserContextProvider> */}
    </SafeAreaView>
  );
};
export default App;