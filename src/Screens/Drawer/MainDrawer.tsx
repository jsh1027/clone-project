import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import Styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';

import UserDrawer from '~/Components/Drawer/UserDrawer';
import GuestDrawer from '~/Components/Drawer/GuestDrawer';
import { UserContext } from '~/Context/User';

const windowW = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height - 50;

type NavigationProp = StackNavigationProp<StackNaviParamList>;
interface Props {
    navigation: NavigationProp;
};

const Container = Styled.TouchableWithoutFeedback`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: transparent;
    justify-content: flex-end;
    align-items: center;
    /* border: blue; */
`;

const Sheet = Styled.View`
    width: 300px;
    height: 100%;
    padding: 5% 7%;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: center;
`;

const aStyle = StyleSheet.create({
    animationView: {
      width: windowW
    }
});



const MainDrawer = ( { navigation }: Props ) => {
  const { userInfo } = useContext<IUserContext>(UserContext);

    let move = useRef(new Animated.ValueXY({x: windowW, y: 0})).current;
    
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
        <Container onPress={()=> navigation.goBack()}>
            <Animated.View
                style={[aStyle.animationView, { transform: [{translateY: move.y}] }]}>
                <Sheet>
                    { userInfo ?
                      <UserDrawer />
                      :
                      <GuestDrawer navigation={navigation} />
                    }
                </Sheet>
            </Animated.View>
        </Container>
    );
};


export default MainDrawer;