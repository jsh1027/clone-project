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
    height: 500px;
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
    border-bottom-width: 1px;
    border-color: ${commonValue.c_unselect};
`;

const aStyle = StyleSheet.create({
    animationView: {
      width: windowW
    }
});



const AgencySelectMdal = ( { route, navigation }: Props ) => {
        return(
        <Container>
            <Animated.View
                // style={[aStyle.animationView, { transform: [{translateY: move.y}] }]}
            >
                <Sheet>
                    <ButtonsBox>
                        <TouchableHighlight underlayColor={commonValue.c_click} 
                        onPress={ ()=> navigation.navigate('JoinPhonePermission',{agency: 'SKT', nextFocus: 'phoneInput'}) }>
                            <ContentText>
                                SKT
                            </ContentText>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={commonValue.c_click} 
                        onPress={ ()=> navigation.navigate('JoinPhonePermission',{agency: 'KT', nextFocus: 'phoneInput'}) }>
                            <ContentText>
                                KT
                            </ContentText>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={commonValue.c_click} 
                        onPress={ ()=> navigation.navigate('JoinPhonePermission',{agency: 'LG U+', nextFocus: 'phoneInput'}) }>
                            <ContentText>
                                LG U+
                            </ContentText>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={commonValue.c_click} 
                        onPress={ ()=> navigation.navigate('JoinPhonePermission',{agency: 'SKT 알뜰폰', nextFocus: 'phoneInput'}) }>
                            <ContentText>
                                SKT 알뜰폰
                            </ContentText>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={commonValue.c_click} 
                        onPress={ ()=> navigation.navigate('JoinPhonePermission',{agency: 'KT 알뜰폰', nextFocus: 'phoneInput'}) }>
                            <ContentText>
                                KT 알뜰폰
                            </ContentText>
                        </TouchableHighlight>
                        
                        <TouchableHighlight underlayColor={commonValue.c_click} 
                        style={{borderBottomWidth: 0}}
                        onPress={ ()=> navigation.navigate('JoinPhonePermission',{agency: 'LG U+ 알뜰폰', nextFocus: 'phoneInput'}) }>
                            <ContentText>
                                LG U+ 알뜰폰
                            </ContentText>
                        </TouchableHighlight>

                    </ButtonsBox>
                </Sheet>
            </Animated.View>
        </Container>
    );
};


export default AgencySelectMdal;