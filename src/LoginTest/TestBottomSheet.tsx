import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import Styled from 'styled-components/native';
import Default from '~/Components/Login/LoginDefaultBtnsBox';
import Another from '~/Components/Login/LoginAnotherBtnsBox2';
import AnotherBtnsButton from '~/LoginTest/AnotherBtnsButton';
import { StackNavigationProp } from '@react-navigation/stack';

const windowW = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height - 50;

type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};

const Container = Styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: transparent;
    justify-content: flex-end;
    align-items: center;
    /* border: blue; */
`;

const Sheet = Styled.View`
    width: 100%;
    height: 350px;
    padding: 10%;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const aStyle = StyleSheet.create({
    animationView: {
      width: windowW
    }
});



const TestBottomSheet = ( { navigation }: Props ) => {
    let move = useRef(new Animated.ValueXY({x: 0, y: 350})).current;
    
    useEffect(() => {
        Animated.timing(
            move,
            {
            toValue: {x: 0, y: 0},
            duration: 300,
            useNativeDriver: true
            }
        ).start();
    }, [move]);


    return(
        <Container>
            <Animated.View
                style={[aStyle.animationView, { transform: [{translateY: move.y}] }]}
            >
                <Sheet>
                    <Default />
                    <AnotherBtnsButton navigation={navigation} />
                </Sheet>
            </Animated.View>
        </Container>
    );
};


export default TestBottomSheet;