import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import Styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ContentText } from '~/Components/Common/TextStyles';
import commonValue from '~/Components/Common/commonValue';

const windowW = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height - 50;

type NavigationProp = StackNavigationProp<StackNaviParamList>;
interface Props {
    navigation: NavigationProp;
    route: any;
};

const Container = Styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: transparent;
    justify-content: flex-end;
    align-items: center;
`;

const Sheet = Styled.View`
    width: ${windowW}px;
    height: 180px;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: hidden;
    elevation: 5;
`;

const ButtonsBox = Styled.View`
    width: 85%;
    height: 90%;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
`;

const TouchableHighlight = Styled.TouchableHighlight`
    flex: 1;
    width: 100%;
    background-color: #ffffff;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 30px;
`;

const Border = Styled.View`
    width: 100%;
    height: 1px;
    background-color: ${commonValue.c_unselect};
    margin: 5px 30px;
`;

const aStyle = StyleSheet.create({
    animationView: {
      width: windowW
    }
});



const CitizenSelectMdal = ( { route, navigation }: Props ) => {
        return(
        <Container>
            <Animated.View
                // style={[aStyle.animationView, { transform: [{translateY: move.y}] }]}
            >
                <Sheet>
                    <ButtonsBox>
                    <TouchableHighlight underlayColor={commonValue.c_click} 
                        onPress={ ()=> navigation.navigate('JoinPhonePermission',{citizenInfo: '내국인', nextFocus: 'nameInput'}) }>
                        <ContentText style={{marginTop: 20}} >내국인</ContentText>
                    </TouchableHighlight>

                    <Border />

                    <TouchableHighlight underlayColor={commonValue.c_click} 
                        onPress={ ()=> navigation.navigate('JoinPhonePermission',{citizenInfo: '외국인', nextFocus: 'nameInput'}) }>
                        <ContentText style={{marginBottom: 20}} >외국인</ContentText>
                    </TouchableHighlight>
                    </ButtonsBox>
                </Sheet>
            </Animated.View>
        </Container>
    );
};


export default CitizenSelectMdal;