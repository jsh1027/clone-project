import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import Styled from 'styled-components/native';
import Default from '~/Components/Login/LoginDefaultBtnsBox';
import Another from '~/Components/Login/LoginAnotherBtnsBox2';
import AnotherBtnsButton from '~/LoginTest/AnotherBtnsButton';

const windowW = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height - 50;

const Container = Styled.View`
    width: 100%;
    height: 100%;
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
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const aStyle = StyleSheet.create({
    animationView: {
      width: windowW
    }
});



const TestBottomSheet = () => {
    const [ isDefatul, setIsDefault ] = useState(true);
    const [ yValue, setYValue ] = useState({toValue: 0, fromValue: 400});
    let bottomValue = (val: boolean) => {
        if(val === true) {
            return -400;
        } else {
            return 0;
        }
    };

    let animationValue = new Animated.ValueXY({x: 0, y: yValue.fromValue});
    let move = useRef(new Animated.ValueXY({x: 0, y: yValue.fromValue})).current;
    
    useEffect(() => {
        Animated.timing(
            move,
            {
            toValue: {x: 0, y: yValue.toValue},
            duration: 300,
            useNativeDriver: true
            }
        ).start();
    }, [move]);

    animationValue.addListener(()=> move= useRef(new Animated.ValueXY({x: 0, y: yValue.fromValue})).current);


    return(
        <Container>
            <Animated.View
            style={[aStyle.animationView, { transform: [{translateY: move.y}] }]}>
                <Sheet style={isDefatul ? { bottom: -410} : {}}>
                    <Default />
                    {isDefatul
                    ? <AnotherBtnsButton setIsDefault={setIsDefault} setYValue={setYValue} />
                    :                    
                    <Another />
                }
                </Sheet>
            </Animated.View>
        </Container>
    );
};


export default TestBottomSheet;