import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import BottomSheet from 'reanimated-bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import { TitleText, ContentText, SupplementText } from '~/Components/Common/TextStyles';
import LoginDefaultBtnsBox from '~/Components/Login/LoginDefaultBtnsBox';
import LoginAnotherBtnsBox from '~/Components/Login/LoginAnotherBtnsBox';
import { Dimensions } from 'react-native';


const fullHeight = Dimensions.get('window').height - 50;



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

const PanelBox = Styled.View`
  width: 100%;
  height: 20px;
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
  height: ${fullHeight}px;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
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




interface Props{
  isDefault?: boolean,
  setIsDefault?: void
}
const LoginBtnsContainer = ( { isDefault, setIsDefault }: Props ) => {
  
  return (
       isDefault ?
        <TouchableOpacity
          onPress={()=>console.log('d')}
        >
          <SupplementText style={{textDecorationLine: "underline"}}>
            다른방법으로 로그인
          </SupplementText>
        </TouchableOpacity>
        :
        <LoginAnotherBtnsBox />
  );    
};



export default LoginBtnsContainer;
   