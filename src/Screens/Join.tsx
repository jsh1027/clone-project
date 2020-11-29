import React, {useState} from 'react';
import {Alert, Button} from 'react-native';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import { StackNavigationProp } from '@react-navigation/stack';
import { ContentTitleText } from '~/Components/Common/TextStyles';



type NavigationProp = StackNavigationProp<StackNaviParamList, 'Join'>;
interface Props {
    navigation: NavigationProp;
};


const SafeAreaView = Styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Input = Styled.TextInput`
    width: 100%;
    height: 50px;
    border: 1px solid ${commonValue.c_brand};
`;

const Box = Styled.View`
    width: 80%;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
`;

const BtnBox = Styled.View`
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0px;
`;

const Join = ({navigation}: Props) => {

    return (
        <SafeAreaView>
            <Box>
                <ContentTitleText>이메일</ContentTitleText>
                <Input 
                    autoCompleteType='email' />
            </Box>
            <Box>
                <ContentTitleText>비밀번호</ContentTitleText>
                <Input 
                    autoCompleteType='password' />
            </Box>
            <Box>
                <ContentTitleText>회원명</ContentTitleText>
                <Input 
                    autoCompleteType='username' />
            </Box>
            <Box>
                <ContentTitleText>생년월일</ContentTitleText>
                <Input 
                    autoCompleteType='cc-number' />
            </Box>
            <Box>
                <ContentTitleText>휴대폰 번호</ContentTitleText>
                <Input 
                    autoCompleteType='tel' />
            </Box>
            <BtnBox>
            <Button 
                title="확인"
                color={commonValue.c_brand}
                onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
            </BtnBox>
        </SafeAreaView>
    );
};

export default Join;