import React, { useEffect, useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Animated, Dimensions, StyleSheet, Button, Alert } from "react-native";
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
// import Input from '~/Components/Common/Input';
import { ContentTitleText, TitleText } from '~/Components/Common/TextStyles';
import Icon from 'react-native-vector-icons/Ionicons';



type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;
const fullHeight = Dimensions.get('window').height - 50;

const Container = Styled.TouchableWithoutFeedback`
    width: ${windowW}px;
    height: ${windowH}px;
    position: absolute;
    background-color: transparent;
    justify-content: flex-end;
    align-items: center;
    border: 3px solid green;
`;

const Sheet = Styled.View`
    width: 100%;
    height: ${fullHeight}px;
    padding: 7% 10%;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    bottom: 0;
    margin-top: 50px;
`;

const TitleBox = Styled.View`
    width: 100%;
    height: 90px;    
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px 0px;
`;

const IconBox = Styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    align-self: flex-start;
`;

const BackIcon = Styled(Icon)`
    color: ${commonValue.c_supplement};
    font-size: 30px;
`;

const BottomBtn = Styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: ${commonValue.c_brand};
`;

const KeyboardAvoidingView = Styled.KeyboardAvoidingView`
    flex: 1;
    width: ${windowW}px;
    /* height: 100px; */
    justify-content: flex-end;
    /* border: red; */
`;

const aStyle = StyleSheet.create({
    animationView: {
      width: windowW
    }
});

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
    /* border: red; */
`;

const InputBorder = Styled.View`
    width: 100%;
    height: 2px;
`;




const Join = ( { navigation }: Props ) => {
    const fadeAnim = useRef(new Animated.Value(0)).current 

    React.useEffect(() => {
        Animated.timing(
        fadeAnim,
        {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }
        ).start();
    }, [fadeAnim])


    const [ email, setEmail ] = useState<string | undefined>(undefined);
    const [ pw, setPw ] = useState<string | undefined>(undefined);
    const [ name, setName ] = useState<string | undefined>(undefined);
    const [ birth, setBirth ] = useState<string | undefined>(undefined);
    const [ phone, setPhone ] = useState<string | undefined>(undefined);


    const submitFC = ()=>{
        const joinInfo = {
            "email" : email,
            "password" : pw,
            "name" : name,
            "birth" : birth,
            "phone" : phone
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
        let url = 'https://localhost:8080/greencar/user/join';
        return fetch(url, data)
        .then((res) => {
        return res.json();
        })
        .then((data) => {
        console.log(data);
        });
    };


    return(
        <Container
        onPress={()=>navigation.goBack()}
        >
            <Animated.View style={[aStyle.animationView,{ opacity: fadeAnim }]} >  
                <Sheet>
                    <IconBox onPress={()=>navigation.goBack()}>
                        <BackIcon name='chevron-back' />
                    </IconBox>
                    <TitleBox>
                        <TitleText>사용하실 이메일을</TitleText> 
                        <TitleText>알려주세요</TitleText>
                    </TitleBox>
                    <InputBox>
                        <TextInput
                        autoFocus={true}
                        textContentType={'emailAddress'}
                        autoCompleteType={'email'}
                        selectionColor={commonValue.c_brand}
                        placeholder={'이메일'}                          
                        onChangeText={(text: string) => setEmail(text)}                            
                        value={email}        
                        />
                        <InputBorder 
                        style={{backgroundColor: commonValue.c_brand}}
                        />
                    </InputBox>
                    <InputBox>
                        <TextInput
                        textContentType={'password'}
                        autoCompleteType={'password'}
                        selectionColor={commonValue.c_brand}
                        placeholder={'패스워드'}                               
                        onChangeText={(text: string) => setPw(text)}                            
                        value={pw}       
                        />
                        <InputBorder 
                        style={{backgroundColor: commonValue.c_brand}}
                        />
                    </InputBox>
                    <InputBox>
                        <TextInput
                        textContentType={'name'}
                        autoCompleteType={'name'}
                        selectionColor={commonValue.c_brand}
                        placeholder={'이름'}                               
                        onChangeText={(text: string) => setName(text)}                            
                        value={name}       
                        />
                        <InputBorder 
                        style={{backgroundColor: commonValue.c_brand}}
                        />
                    </InputBox>
                    <InputBox>
                        <TextInput
                        textContentType={'none'}
                        selectionColor={commonValue.c_brand}
                        placeholder={'생년월일 (ex: 901130)'}                               
                        onChangeText={(text: string) => setBirth(text)}                            
                        value={birth}       
                        />
                        <InputBorder 
                        style={{backgroundColor: commonValue.c_brand}}
                        />
                    </InputBox>
                    <InputBox>
                        <TextInput
                        textContentType={'telephoneNumber'}
                        autoCompleteType={'cc-number'}
                        selectionColor={commonValue.c_brand}
                        placeholder={'핸드폰번호'}                               
                        onChangeText={(text: string) => setPhone(text)}                            
                        value={phone}       
                        />
                        <InputBorder 
                        style={{backgroundColor: commonValue.c_brand}}
                        />
                    </InputBox>
                <KeyboardAvoidingView
                behavior={'padding'}>
                    <BottomBtn
                    onPress={
                        () => {
                            Alert.alert(submitFC());
                            // fetchJoin();
                        }}
                    >
                        <ContentTitleText style={{color: '#ffffff'}}>
                            다음
                        </ContentTitleText>
                    </BottomBtn>
                </KeyboardAvoidingView>
                </Sheet>
            </Animated.View>
        </Container>
    );
};


export default Join;
