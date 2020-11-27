import React from 'react';
import Styled from 'styled-components/native';
import { ContentText } from '~/Components/Common/TextStyles';
import commonValue from '~/Components/Common/commonValue';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import LoginButton from '~/Components/Login/LoginButton';


const Shadow = Styled(LinearGradient)`
  width: 100%;
  height: 50px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-top: 10px;
`;

const TestBox = Styled.View`
  width: 100%;
  height: 20px;
  /* border: black; */
  align-items: center;
  overflow: hidden;
`;

const Semicircle = Styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  background-color: #ffffff;
  margin-top: 10px;
  transform: scaleX(5);
  /* border: black; */
`;

const HeaderBox = Styled.View`
  width: 100%;
  height: 20px;
  background-color: #ffffff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const PanelBox = Styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const PanelHandle = Styled.View`
  width: 40px;
  height: 6px;
  border-radius: 4px;
  background-color: #00000020;
`;

const Container = Styled.View`
  width: 100%;
  /* justify-content: flex-start; */
  align-items: center;
  border: red;
`;

const TitleBox = Styled.View`
    width: 100%;
    height: 80px;    
    justify-content: center;
    align-items: flex-start;
`;

const TouchableOpacity = Styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin-bottom: 10px;
`;

const RoundBtnText = Styled(ContentText)`
    color: #ffffff;
    font-weight: bold;
`;

const BtnIcon = Styled(Icon)`
    position: absolute;
    left: 20px;
    color: #ffffff;
    font-size: 27px;
`;



const RenderHeader = () => (
    <Shadow
      locations={[0, 0.7]}
      colors={['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.15)']} 
    >
      <TestBox>
        <Semicircle />
      </TestBox>
      <HeaderBox>
        <PanelBox>
          <PanelHandle />
        </PanelBox>
      </HeaderBox>
  </Shadow>
);




const LoginDefaultBtnsBox = () => {
    return (
      <Container>
        <LoginButton 
        bgColor='#009afa'
        icon='alpha-l-circle'
        iColor='#ffffff'
        tColor='#ffffff'
        text='L.Point 로그인'
        />

        <LoginButton 
        bgColor={commonValue.c_brand}
        icon='leaf'
        iColor='#ffffff'
        tColor='#ffffff'
        text='민트카 로그인'
        />          
      </Container>
    );
};

export default LoginDefaultBtnsBox;