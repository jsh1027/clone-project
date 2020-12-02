import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import Styled from 'styled-components/native';
import Default from '~/Components/Login/LoginDefault';
import Another from '~/Components/Login/LoginAnotherButton';
import AnotherBtnsButton from '~/LoginTest/AnotherBtnsButton';
import { StackNavigationProp } from '@react-navigation/stack';


type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;
const fullHeight = Dimensions.get('window').height - 50;

const Container = Styled.View`
    width: ${windowW}px;
    height: ${windowH}px;
    position: absolute;
    background-color: transparent;
    justify-content: flex-end;
    align-items: center;
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



const TestBottomSheet = ( { navigation }: Props ) => {
    return(
        <Container>
            <Sheet>            
                <Default />     
                <Another navigation={navigation} />
            </Sheet>
        </Container>
    );
};


export default TestBottomSheet;