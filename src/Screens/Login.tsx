import React from 'react';
import { Text, TextInput } from 'react-native';
import Styled from 'styled-components/native';
import { TextStyles } from '~/Components/StyleComponents';
import CommonValue from '~/Components/StyleComponents/CommonValue';

const Login = () => {

    const LoginBackground = Styled.View`
        position: absolute;
        z-index: 10;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        border: 2px solid red;
    `;

    const LoginContainer = Styled.View`    
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 5% 10% 5% 10%;
        background-color: #ffffff;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        bottom: 0px;
    `;

    const TitleText = TextStyles.TitleText_com;

    return(
        <LoginBackground>
            <LoginContainer>
                <TitleText>
                    <Text style={{color:CommonValue.c_brand}}>민트카</Text>
                    <Text> 로그인</Text>
                </TitleText>
                <TextInput 
                />
            </LoginContainer>
        </LoginBackground>
    );

};

export default Login;