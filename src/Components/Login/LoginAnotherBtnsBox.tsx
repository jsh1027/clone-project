import React, { useState } from 'react';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import LoginButton from '~/Components/Login/LoginButton';
import { SupplementText } from '~/Components/Common/TextStyles';


const Container = Styled.View`
  width: 100%;
  /* justify-content: flex-start; */
  align-items: center;
  border: red;
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



const LoginAnotherBtnsBox = ( ) => {  
  return (
    <Container>
      <LoginButton 
      boderC={commonValue.c_supplement}
      boderW={1}
      icon='leaf'
      iColor='#724f4f'
      tColor={commonValue.c_title}
      text='카카오 로그인'
      />

      <LoginButton 
      boderC={commonValue.c_supplement}
      boderW={1}
      icon='alpha-n-box'
      iColor='#28ad00'
      tColor={commonValue.c_title}
      text='네이버 로그인'
      />

      <LoginButton 
      boderC={commonValue.c_supplement}
      boderW={1}
      icon='facebook'
      iColor='#007bce'
      tColor={commonValue.c_title}
      text='페이스북 로그인'
      />

      <LoginButton 
      boderC={commonValue.c_supplement}
      boderW={1}
      icon='google'
      iColor='#ff3d3d'
      tColor={commonValue.c_title}
      text='구글 로그인'
      />

      <LoginButton 
      boderC={commonValue.c_supplement}
      boderW={1}
      icon='twitter'
      iColor='#00a7da'
      tColor={commonValue.c_title}
      text='트위터 로그인'
      />
    </Container>
  );
};

export default LoginAnotherBtnsBox;