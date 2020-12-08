import React, { useEffect, useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Animated, Dimensions, StyleSheet, Button, Alert,  } from "react-native";
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import InputHeader from '~/Components/Join/JoinInput/InputHeader';
import { ContentText, SupplementText } from '~/Components/Common/TextStyles';
import { checkPW } from '~/Assets/Validate/validateFC';
import LinearGradient from 'react-native-linear-gradient';



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


const JoinPassword = ( { route, navigation }: Props ) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      Animated.timing( fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true } ).start();
      navigation.addListener('beforeRemove', (e) => {
        Animated.timing( fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true } ).start(); });
    }, [fadeAnim]);


    const [ password, setPassword ] = useState<string>('');
    let msg = '비밀번호를 입력해주세요';

    const submitFC = ()=>{
        const joinInfo = {
            email : route.params.paramData.email,
            password : password,
            name: route.params.paramData.name,
            birth: route.params.paramData.birth,
            phone: route.params.paramData.phone
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
            return navigation.navigate('Intro');
        }).catch(error => 
            console.error(error)
        );
    };

    return(
        <Container>
            <Sheet>
                <Animated.View style={[aStyle.animationView,{ opacity: fadeAnim }]} >
                    <ContentBox>
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
                    
                        <BottomBtn  
                            disabled={!checkPW({password, msg}).check}
                            style={checkPW({password, msg}).check ? {backgroundColor: commonValue.c_brand} : {backgroundColor: commonValue.c_supplement}}
                            onPress={()=>{                            
                                fetchJoin();
                                // console.log(submitFC());
                            }}
                        >
                            <Gradient colors={['#f4ff5f', commonValue.c_brand]} start={{x: 0, y: 1}} end={{x: 0.5, y: 0}}
                            style={ checkPW({password, msg}).check ? { opacity: 100 } : { opacity: 0 } } />
                            <ContentText style={{color: '#ffffff' }}>
                                {checkPW({password, msg}).msg}
                            </ContentText>
                        </BottomBtn>
                    </ContentBox>

                </Animated.View>
            </Sheet>
        </Container>
    );
};


export default JoinPassword;
