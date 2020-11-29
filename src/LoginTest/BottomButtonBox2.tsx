import React, { useState } from 'react';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import LinearGradient from 'react-native-linear-gradient';
import { ContentTitleText } from '~/Components/Common/TextStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import TestBottomSheet from '~/LoginTest/TestBottomSheet';


type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};

const Container = Styled.View`
    flex: 2;
    background-color: transparent;
`;

const Shadow = Styled(LinearGradient)`
    flex: 1;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    flex-direction: row-reverse;
    background-color: transparent;
`;

const Box = Styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    margin-top: 15px;
    overflow: hidden;
`;

const Line = Styled.View`
    width: 2px;
    height: 30%;
    background-color: ${commonValue.c_supplement};
`;

const Button = Styled.TouchableOpacity`
    flex: 1;
    height: 100%;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
`;



const BottomButtonBox2 = ( {navigation}: Props ) => {
    const [ isSheetOn, setIsSheetOn ] = useState(false);

    return (
        <>
        <Container>
            <Shadow
                locations={[0, 0.7]}
                colors={['rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 0.4)']}
            >
                <Box>
                    <Button 
                    onPress={
                        ()=> { 
                            // setIsSheetOn(true); 
                            navigation.navigate("LoginModal")}
                    }>
                        <ContentTitleText>로그인</ContentTitleText>
                    </Button>
                    <Line />
                    <Button>
                        <ContentTitleText>회원가입</ContentTitleText>
                    </Button>
                </Box>
            </Shadow>
        </Container>

            {/* { isSheetOn ?
            <TestBottomSheet />
            :
            <></> } */}
        </>
    );
};

export default BottomButtonBox2;