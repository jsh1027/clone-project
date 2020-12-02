import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet } from "react-native";
import Styled from 'styled-components/native';
import LoginDefault from '~/Components/Login/LoginDefault';
import JoinAnotherBtns from '~/Components/Join/JoinAnotherBtns';
import { StackNavigationProp } from '@react-navigation/stack';
import { Value } from 'react-native-reanimated';


type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;
const fullHeight = Dimensions.get('window').height - 50;

const Container = Styled.TouchableWithoutFeedback`
    width: ${windowW}px;
    height: ${windowH}px;
    position: absolute;
    background-color: transparent;
    justify-content: flex-end;
    align-items: center;
    border: 3px solid green;
`;

const Sheet = Styled.View`
    width: 100%;
    height: ${fullHeight}px;
    padding: 10%;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    bottom: 0;
    margin-top: 50px;
`;



const LoginAnotherSelectModal = ( { navigation }: Props ) => {

    return(
        <Container
        onPress={()=>navigation.goBack()}
        > 
            <Sheet>            
                <LoginDefault />     
                <JoinAnotherBtns navigation={navigation} />
            </Sheet>
        </Container>
    );
};


export default LoginAnotherSelectModal;