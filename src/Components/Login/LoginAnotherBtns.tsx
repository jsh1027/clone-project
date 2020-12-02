import React, { useState, useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import LoginButton from '~/Components/Login/LoginButton';
import { StackNavigationProp } from '@react-navigation/stack';


type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};

const windowH = Dimensions.get('window').height;
const windowW = Dimensions.get('window').width;

const Container = Styled.View`
  width: 100%;
  justify-content: center ;
  align-items: center;
  padding: 0 10%;
  /* border: blue; */
`;

const aStyle = StyleSheet.create({
  animationView: {
    width: windowW
  }
});


const JoinAnotherBtns = ( { navigation }: Props ) => {  
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 700,
        useNativeDriver: true
      }
    ).start();

    navigation.addListener('beforeRemove', (e) => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 200,
          useNativeDriver: true
        }
      ).start();
    });
  }, [fadeAnim])

  return (
    <Animated.View style={[aStyle.animationView,{ opacity: fadeAnim }]} >  
      <Container>
          <LoginButton 
          boderC={commonValue.c_supplement}
          boderW={1}
          icon='chat'
          iColor='#724f4f'
          tColor={commonValue.c_title}
          text='카카오 로그인'
          pressFC={'카카오 로그인'}
          />

          <LoginButton 
          boderC={commonValue.c_supplement}
          boderW={1}
          icon='alpha-n-box'
          iColor='#28ad00'
          tColor={commonValue.c_title}
          text='네이버 로그인'
          pressFC={'네이버 로그인'}
          />

          <LoginButton 
          boderC={commonValue.c_supplement}
          boderW={1}
          icon='facebook'
          iColor='#007bce'
          tColor={commonValue.c_title}
          text='페이스북 로그인'
          pressFC={'페이스북 로그인'}
          />

          <LoginButton 
          boderC={commonValue.c_supplement}
          boderW={1}
          icon='google'
          iColor='#ff3d3d'
          tColor={commonValue.c_title}
          text='구글 로그인'
          pressFC={'구글 로그인'}
          />

          <LoginButton 
          boderC={commonValue.c_supplement}
          boderW={1}
          icon='twitter'
          iColor='#00a7da'
          tColor={commonValue.c_title}
          text='트위터 로그인'
          pressFC={'트위터 로그인'}
          />   
      </Container>
    </Animated.View>
  );
};

export default JoinAnotherBtns;