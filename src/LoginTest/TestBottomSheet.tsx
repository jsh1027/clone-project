import React, { useEffect, useRef, useState } from 'react';
import { Dimensions } from "react-native";
import Styled from 'styled-components/native';
import Default from '~/Components/Login/LoginDefault';
import AnotherBtnsButton from '~/LoginTest/AnotherBtnsButton';
import { StackNavigationProp } from '@react-navigation/stack';

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;
const fullHeight = Dimensions.get('window').height - 50;

type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};

const CloseListenerView = Styled.View`
    width: ${windowW}px;
    height: ${windowH-365}px;
    background-color: transparent;
`;

const Container = Styled.View`
    width: ${windowW}px;
    height: ${windowH}px;
    position: absolute;
    background-color: transparent;
    justify-content: flex-end;
    align-items: center;
    /* border: blue; */
`;

const Sheet = Styled.View`
    width: 100%;
    height: 365px;
    padding: 10%;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;




const TestBottomSheet = ( { navigation }: Props ) => {

    return(
        <Container>
            <Sheet>
                <Default />
                <AnotherBtnsButton navigation={navigation} />
            </Sheet>
        </Container>
    );
};


export default TestBottomSheet;