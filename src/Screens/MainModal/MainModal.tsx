import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import Styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ContentText } from '~/Components/Common/TextStyles';
import commonValue from '~/Components/Common/commonValue';

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;
const fullHeihtg = Dimensions.get('window').height - 50;

type NavigationProp = StackNavigationProp<StackNaviParamList>;
interface Props {
    navigation: NavigationProp;
    route: any;
};

const Container = Styled.View`
    width: ${windowW}px;
    height: ${windowH}px;
    position: absolute;
    background-color: transparent;
    justify-content: flex-end;
    align-items: center;
`;

const Sheet = Styled.View`
    width: ${windowW-40}px;
    height: 230px;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: hidden;
`;

const Header = Styled.View`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
`;

const Bar = Styled.View`
    width: 35px;
    height: 4px;
    border-radius: 2px;
    background-color: ${commonValue.c_unselect};
`;

const RowBox = Styled.View`
    width: 100%;
    height: 170px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Image = Styled.Image`
    width: 180px;
    height: 120px;
    margin: 0px 10px;
`;

const TextBox = Styled.View`
    flex: 4;
    justify-content: center;
    align-items: flex-start;
`;

const NameText = Styled.Text`
    font-size: 14px;
`;

const PriceText = Styled.Text`
    font-size: 22px;
    font-weight: bold;
`;

const UnitText = Styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

const SubText = Styled.Text`
    font-size: 12px;
    color: ${commonValue.c_supplement};
`;


const aStyle = StyleSheet.create({
    animationView: {
      width: windowW
    }
});



const IntroModal = ( { route, navigation }: Props ) => {

        return(
        <Container>
                <Sheet>
                    <Header>
                        <Bar />
                    </Header>
                    <RowBox>
                        <Image source={require('~/Assets/Images/Images/car_img.png')}
                        style={{resizeMode: 'contain'}} />

                        <TextBox>
                            <NameText>셀토스1.6(디젤)</NameText>
                            <PriceText>6,560 <UnitText>원</UnitText></PriceText>
                            <SubText>130원/km</SubText>
                        </TextBox>
                    </RowBox>
                </Sheet>
        </Container>
    );
};


export default IntroModal;