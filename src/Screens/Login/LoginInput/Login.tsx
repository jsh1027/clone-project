import React, { useContext, useEffect, useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Animated, Dimensions, StyleSheet, Button, Alert,  } from "react-native";
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import InputHeader from '~/Components/Join/JoinInput/InputHeader';
import { ContentText } from '~/Components/Common/TextStyles';
import { checkEmail } from '~/Assets/Validate/validateFC';
import LinearGradient from 'react-native-linear-gradient';
import { UserContext } from '~/Context/User';



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


const JoinEmail = ( { navigation }: Props ) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      Animated.timing( fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true } ).start();
      navigation.addListener('beforeRemove', (e) => {
        Animated.timing( fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true } ).start(); });
    }, [fadeAnim]);



    //로그인 Fetch =========================================================================>
    const { login } = useContext<IUserContext>(UserContext);
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    let msg = '로그인 정보를 입력해주세요';

    const submitFC = ()=>{
        const LoginInfo = {
            email : email,
            password : password
        }
        return(JSON.stringify(LoginInfo));
    }

    //request
    let data = {
        method: 'POST',
        headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
        },
        body: submitFC()
    };

    function fetchLogin() {
        let url = 'http://192.168.0.112:3332/greencar/user/login';
            return fetch(url, data)
        .then((res) => {
            if(res.status === 400) return Alert.alert('죄송합니다. 다시 한번 시도해주세요.');
            if(res.status === 200) return res.json();
        })
        .then( resdata => {
            login(resdata);
        }).catch(error => 
            console.error(error)
        );
    };    
    //로그인 Fetch =========================================================================<


    return(
        <>      
        <Container>
            <Sheet>
                <Animated.View style={[aStyle.animationView,{ opacity: fadeAnim }]} >
                    <ContentBox>
                        <InputHeader 
                            navigation={navigation}
                            firstLine="민트카 로그인"
                            secondLine=""
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
                                    // checkEmail({email, msg});
                                }}                            
                            value={email}        
                            />
                            <InputBorder 
                            style={{backgroundColor: commonValue.c_brand}}
                            />

                            <TextInput
                            textContentType={'password'}
                            autoCompleteType={'password'}
                            secureTextEntry={true}
                            selectionColor={commonValue.c_brand}
                            placeholder={'비밀번호'}                          
                            onChangeText={
                                (text: string) => {
                                    setPassword(text);
                                }}                            
                            value={password}        
                            />
                            <InputBorder 
                            style={{backgroundColor: commonValue.c_brand}}
                            />


                        </InputBox>
                        

                        <BottomBtn
                            disabled={!checkEmail({email, msg}).check}
                            onPress={()=>{
                                fetchLogin();
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
