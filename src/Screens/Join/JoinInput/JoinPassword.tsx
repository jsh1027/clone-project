import React, { useEffect, useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Animated, Dimensions, StyleSheet, Button, Alert,  } from "react-native";
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import InputHeader from '~/Components/Join/JoinInput/InputHeader';
import { ContentText, SupplementText } from '~/Components/Common/TextStyles';
import { checkPW } from '~/Assets/Validate/validateFC';



type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
    route: {
        params: string | undefined;
    };
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
    justify-content: center;
    align-items: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin-top: 50px;
    justify-content: flex-start;
`;

const TopBox = Styled.View`
    width: 100%;
    justify-content: flex-start;    
    padding: 7% 10%;
`;

const BottomBtn = Styled.TouchableOpacity`
    width: ${windowW}px;
    height: 60px;
    margin-top: 70px;
    justify-content: center;
    align-items: center;
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


const JoinPassword = ( { route, navigation }: Props ) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      Animated.timing( fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true } ).start();
      navigation.addListener('beforeRemove', (e) => {
        Animated.timing( fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true } ).start(); });
    }, [fadeAnim]);

    const [ password, setPassword ] = useState<string>('');
    const [ dataObj, setDataObj ] = useState<string>(undefined);
    let msg = '비밀번호를 입력해주세요';

    const entries = (data) => {
        for (const [key, value] of Object.entries(data)) {
            console.log(`>>> ${key}: ${value}`);
          };
    };

    const submitFC = ()=>{
        const joinInfo = {
            email : route.params.email,
            password : password,
            name : '테스트',
            birth : '201201',
            phone : '01011223344'
        }
        return(JSON.stringify(joinInfo));
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

    function fetchJoin() {
        let url = 'http://192.168.0.112:3332/greencar/user/join';
            return fetch(url, data)
        .then((res) => {
            if(res.status === 400) return Alert.alert('죄송합니다. 다시 한번 시도해주세요.');
            if(res.status === 400) return res.json();
        })
        .then( data => {
            setDataObj(data);
        }).catch(error => 
            console.error(error)
        );
    };

    return(
        <Container>
            <Sheet>
                <Animated.View style={[aStyle.animationView,{ opacity: fadeAnim }]} >
                    <TopBox>
                        <InputHeader 
                            navigation={navigation}
                            firstLine="사용하실 비밀번호를"
                            secondLine="입력해주세요"
                        />
                        <InputBox>
                            <TextInput
                            autoFocus={true}
                            textContentType={'password'}
                            autoCompleteType={'password'}
                            selectionColor={commonValue.c_brand}
                            placeholder={'비밀번호'}                          
                            onChangeText={
                                (text: string) => {
                                    setPassword(text);
                                    checkPW({password, msg});
                                }}                            
                            value={password}     
                            maxLength={10}
                            />
                            <InputBorder 
                            style={{backgroundColor: commonValue.c_brand}}
                            />
                        </InputBox>
                        <SupplementText>영문, 숫자, 특수기호를 포함 8~10자</SupplementText>
                        <SupplementText>{
                            dataObj === undefined ? '아직!' : dataObj.toString()
                            }</SupplementText>
                    </TopBox>
                    
                    <BottomBtn
                        disabled={!checkPW({password, msg}).check}
                        style={checkPW({password, msg}).check ? {backgroundColor: commonValue.c_brand} : {backgroundColor: commonValue.c_supplement}}
                        onPress={()=>{                            
                                                        
                            // console.log(submitFC());
                            console.log(fetchJoin());
                        }}
                    >
                        <ContentText style={{color: '#ffffff'}}>
                            {checkPW({password, msg}).msg}
                        </ContentText>
                    </BottomBtn>
                </Animated.View>
            </Sheet>
        </Container>
    );
};


export default JoinPassword;
