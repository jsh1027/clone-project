import React from 'react';
import Styled from 'styled-components/native';
import { ContentText, SupplementText, TitleText } from '~/Components/Common/TextStyles';
import commonValue from '~/Components/Common/commonValue';
import LoginButton from '~/Components/Login/LoginButton';
import { StackNavigationProp } from '@react-navigation/stack';


type NavigationProp = StackNavigationProp<StackNaviParamList>;
interface Props {
    navigation: NavigationProp;
};

const Container = Styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TitleBox = Styled.View`
    width: 100%;
    height: 90px;    
    justify-content: flex-start;
    align-items: flex-start;
`;



const LoginDefault = () => {
    return (
      <Container>        
        <TitleBox>
          <TitleText 
          onPress={()=>console.log('d')}>
            로그인
          </TitleText>
        </TitleBox>
        <LoginButton 
        bgColor='#009afa'
        icon='alpha-l-circle'
        iColor='#ffffff'
        tColor='#ffffff'
        text='L.Point 로그인'
        pressFC={'L.Point 로그인'}
        />

        <LoginButton 
        bgColor={commonValue.c_brand}
        icon='leaf'
        iColor='#ffffff'
        tColor='#ffffff'
        text='민트카 로그인'
        pressFC={'민트카 로그인'}
        naviFC={'JoinPermissionSelect'}
        />      
      </Container>
    );
};

export default LoginDefault;