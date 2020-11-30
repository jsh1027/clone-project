import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import Styled from 'styled-components/native';
import Default from '~/Components/Login/LoginDefaultBtnsBox';
import Another from '~/Components/Login/LoginAnotherBtnsBox2';
import AnotherBtnsButton from '~/LoginTest/AnotherBtnsButton';
import { StackNavigationProp } from '@react-navigation/stack';


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
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    bottom: 0;
    border: red;
    margin-top: 50px;
`;

const aStyle = StyleSheet.create({
    animationView: {
      width: windowW
    }
});



const TestBottomSheet = ( { navigation }: Props ) => {
    let move = useRef(new Animated.ValueXY({x: 0, y: fullHeight-350})).current;
    
    useEffect(() => {
        Animated.timing(
            move,
            {
            toValue: {x: 0, y: 50},
            duration: 400,
            useNativeDriver: true
            }
        ).start();
    }, [move]);


    return(
        <Container
        onPress={()=>navigation.goBack()}
        >
            <Animated.View
                style={[aStyle.animationView, { transform: [{translateY: move.y}] }]}
            >     
                <Sheet>            
                    <Default />     
                    <Another />
                </Sheet>
            </Animated.View>
        </Container>
    );
};


export default TestBottomSheet;