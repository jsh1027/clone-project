import React, { useEffect, useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Animated, Dimensions, StyleSheet, Button, Alert,  } from "react-native";
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import InputHeader from '~/Components/Join/JoinInput/InputHeader';
import { ContentText } from '~/Components/Common/TextStyles';
import { checkEmail } from '~/Assets/Validate/validateFC';
import LinearGradient from 'react-native-linear-gradient';



type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;
const fullHeight = Dimensions.get('window').height - 50;

const Container = Styled.View`
    width: ${windowW}px;
    height: ${windowH}px;
    position: absolute;
    background-color: transparent;
`;

const Sheet = Styled.View`
    width: 100%;
    height: ${fullHeight}px;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin-top: 50px;
`;

const ContentBox = Styled.View`
    width: 100%;
    justify-content: flex-start;    
    padding: 7% 10%;
`;

const BottomBtn = Styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    border-radius: 30px;
    background-color: ${commonValue.c_supplement};
`;

const Gradient = Styled(LinearGradient)`
    width: 100%;
    height: 100%;
    position: absolute;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;

const InputBox = Styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const TextInput = Styled.TextInput`
    width: 100%;
    height: 60px;
    font-size: 15px;
    font-weight: bold;
`;

const InputBorder = Styled.View`
    width: 100%;
    height: 2px;
`;

const aStyle = StyleSheet.create({
    animationView: {
      width: windowW
    }
});


const JoinEmail = ( { route, navigation }: Props ) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      Animated.timing( fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true } ).start();
      navigation.addListener('beforeRemove', (e) => {
        Animated.timing( fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true } ).start(); });
    }, [fadeAnim]);

    const [ email, setEmail ] = useState<string>('');

    let msg = '이메일을 입력해주세요';

    const paramData = {
        email: email,
        name: route.params.name,
        birth: route.params.birth,
        phone: route.params.phone
    };

    return(
        <>      
        <Container>
            <Sheet>
                <Animated.View style={[aStyle.animationView,{ opacity: fadeAnim }]} >
                    <ContentBox>
                        <InputHeader 
                            navigation={navigation}
                            firstLine="사용하실 이메일을"
                            secondLine="알려주세요"
                        />
                        <InputBox>
                            <TextInput
                            autoFocus={true}
                            textContentType={'emailAddress'}
                            autoCompleteType={'email'}
                            selectionColor={commonValue.c_brand}
                            placeholder={'이메일'}                          
                            onChangeText={
                                (text: string) => {
                                    setEmail(text);
                                    checkEmail({email, msg});
                                }}                            
                            value={email}        
                            />
                            <InputBorder 
                            style={{backgroundColor: commonValue.c_brand}}
                            />
                        </InputBox>
                        

                        <BottomBtn
                            disabled={!checkEmail({email, msg}).check}
                            onPress={()=>{
                                if( (checkEmail({email, msg})).check ) navigation.navigate("JoinPassword", {paramData: paramData});
                            }}
                        >
                            <Gradient colors={['#f4ff5f', commonValue.c_brand]} start={{x: 0, y: 1}} end={{x: 0.5, y: 0}}
                            style={ checkEmail({email, msg}).check ? { opacity: 100 } : { opacity: 0 } } />
                            <ContentText style={{color: '#ffffff' }}>
                                {checkEmail({email, msg}).msg}
                            </ContentText>
                        </BottomBtn>

                    </ContentBox>
                </Animated.View>
            </Sheet>
        </Container>         
        </>
    );
};


export default JoinEmail;
