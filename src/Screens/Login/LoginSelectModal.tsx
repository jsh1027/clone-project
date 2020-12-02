import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import Styled from 'styled-components/native';
import LoginDefault from '~/Components/Login/LoginDefault';
import LoginAnotherButton from '~/Components/Login/LoginAnotherButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { ContentText } from '~/Components/Common/TextStyles';

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
    height: 365px;
    padding: 10%;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;

const aStyle = StyleSheet.create({
    animationView: {
      width: windowW
    }
});



const LoginSelectModal = ( { navigation }: Props ) => {
    let move = useRef(new Animated.ValueXY({x: 0, y: 365})).current;
    
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
                    <LoginDefault />
                    <LoginAnotherButton navigation={navigation} />
                </Sheet>
            </Animated.View>
        </Container>
    );
};


export default LoginSelectModal;