import React, { useEffect, useRef, useState } from 'react';
import { Alert, Dimensions, Text } from 'react-native';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import { ContentText } from '~/Components/Common/TextStyles';
import Icon from 'react-native-vector-icons/Octicons';

import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';


const windowW = Dimensions.get('window').width;

type NavigationProp = StackNavigationProp<StackNaviParamList>;
interface Props {
    navigation: NavigationProp;
    citizenInfo: string;
    agency: string;
    nameInput: any;
    phoneInput: any;
};

const Container = Styled.View`
    width: ${windowW}px;
    height: 360px;    
    padding: 0% 10% 0% 10%;

    background-color: #ffffff;
`;

const RowBox = Styled.View`
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const BirthBox = Styled.View`
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const TextInput = Styled.TextInput`
    flex: 4;
    height: 60px;
    padding: 0px 15px;
    border-bottom-width: 1px;
    border-color: ${commonValue.c_unselect};
    font-size: 17px;
    font-size: 17px;
    color: ${commonValue.c_menu};
`;

const BirthInput = Styled.TextInput`
    flex: 6;
    height: 60px;
    padding: 0px 15px;
    border-bottom-width: 1px;
    border-color: ${commonValue.c_unselect};
    font-size: 17px;
    color: ${commonValue.c_menu};
`;

const BirthBackInput = Styled.TextInput`
    flex: 1;
    height: 60px;
    padding: 0px 15px;
    border-bottom-width: 1px;
    border-color: ${commonValue.c_unselect};
`;

const MarginBox = Styled.View`
    width: 15px;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const BirthDotBox = Styled.View`
    flex: 4;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
`;

const Dot = Styled(Icon)`
    font-size: 15px;
    color: ${commonValue.c_unselect};
`;

const SelectInput = Styled.TouchableOpacity`
    flex: 3;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
    padding: 0px 15px;

    border-bottom-width: 1px;
    border-color: ${commonValue.c_unselect};
`;

const SeletText = Styled.Text`
    font-size: 17px;
    color: ${commonValue.c_menu};
`

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



// input data
const initData = () => ({
    name: "",
    birth: "",
    phone: ""
});

const UserInfoInput = ( { phoneInput, nameInput, citizenInfo, agency, navigation }: Props ) => {
    const [ onFocus, setFocus ] = useState('citizenInput');
    const [ name, setName ] = useState('');
    const [ birth, setBirth ] = useState('');
    const [ phone, setPhone ] = useState('');
    let msg = '정보를 입력해주세요'

    const birthInput = useRef(null);
    const birthBackInput = useRef(null);

    const birthSubmit = (text: string)=>{
        if((text.length) >= 6 ) birthBackInput.current.focus();
    };

    const birthBackSubmit = (text: string)=>{
        if((text.length) >= 1 ) {
            setFocus('agencyInput');
            birthBackInput.current.blur();
        }
    };

    const dataCheck = () => {
        if( name.trim() === '' || name.length < 2 ) {
            msg = '이름 입력값을 확인해주세요.';
            return {msg: msg, check: false};
        } else if( birth.trim() === '' || birth.length < 6 ) {
            msg = '생년월일 입력값을 확인해주세요.';
            return {msg: msg, check: false};
        } else if( phone.trim() === '' || phone.length < 10 ) {
            msg = '핸드폰 번호 입력값을 확인해주세요.';
            return {msg: msg, check: false};
        } else {
            msg = '다음';
            return {msg: msg, check: true};
        }
    };

    return(
        <Container>
            <RowBox>
                <SelectInput 
                style={ onFocus === 'citizenInput' ? {borderBottomColor: commonValue.c_brand} : {borderBottomColor: commonValue.c_unselect} }
                onPress={ () => { navigation.navigate('CitizenSelectMdal'); } }>
                    <SeletText>{citizenInfo}</SeletText>
                    <Icon name='triangle-down' style={{fontSize: 17, color: commonValue.c_unselect}}/>
                </SelectInput>
                <TextInput 
                    ref={nameInput}
                    placeholder="이름"
                    onSubmitEditing={()=> birthInput.current.focus()}
                    onFocus={()=> setFocus('nameInput')}
                    style={ onFocus === 'nameInput' ? {borderBottomColor: commonValue.c_brand} : {borderBottomColor: commonValue.c_unselect} }

                    onChangeText={ (text: string) => { setName(text);} } 
                    value={name}
                />
            </RowBox>
            <BirthBox>
                <BirthInput
                    ref={birthInput}
                    placeholder="생년월일"
                    maxLength={6}
                    keyboardType="number-pad"
                    onSubmitEditing={()=> birthBackInput.current.focus()}                    
                    onFocus={()=> setFocus('birthInput')}
                    style={ onFocus === 'birthInput' ? {borderBottomColor: commonValue.c_brand} : {borderBottomColor: commonValue.c_unselect} }

                    onChangeText={ (text: string) => { setBirth(text); birthSubmit(text);} } 
                    value={birth}
                />

                <MarginBox>
                    <Icon name='dash' style={{fontSize: 17, color: commonValue.c_unselect}}/>
                </MarginBox>
                
                <BirthBackInput
                    ref={birthBackInput}
                    maxLength={1}
                    style={{flex: 1}}
                    keyboardType="number-pad"
                    onFocus={()=> setFocus('birthBackInput')}
                    style={ onFocus === 'birthBackInput' ? {borderBottomColor: commonValue.c_brand} : {borderBottomColor: commonValue.c_unselect} }                    
                    onSubmitEditing={()=> setFocus('agencyInput')}

                    onChangeText={ (text: string)=> birthBackSubmit(text) }
                />

                <BirthDotBox>
                    <Dot name='primitive-dot'/>
                    <Dot name='primitive-dot'/>
                    <Dot name='primitive-dot'/>
                    <Dot name='primitive-dot'/>
                    <Dot name='primitive-dot'/>
                    <Dot name='primitive-dot'/>
                    <Dot name='primitive-dot'/>
                </BirthDotBox>
            </BirthBox>
            <RowBox>
                <SelectInput 
                    style={ onFocus === 'agencyInput' ? {borderBottomColor: commonValue.c_brand} : {borderBottomColor: commonValue.c_unselect} }                    
                    onPress={ () => navigation.navigate('AgencySelectMdal') }>
                    <SeletText>{agency}</SeletText>
                    <Icon name='triangle-down' style={{fontSize: 17, color: commonValue.c_unselect}}/>
                </SelectInput>
                <TextInput 
                    ref={phoneInput}
                    placeholder="휴대폰번호"
                    keyboardType="number-pad"
                    selectTextOnFocus={true}

                    onFocus={()=> setFocus('phoneInput')}
                    style={ onFocus === 'phoneInput' ? {borderBottomColor: commonValue.c_brand} : {borderBottomColor: commonValue.c_unselect} }                    
                    onChangeText={ (text: string) => { setPhone(text); }} 
                    value={phone}
                />
            </RowBox>

            <BottomBtn
                onPress={()=>{
                    if( dataCheck().check ) navigation.navigate("JoinEmail", {name: name, birth: birth, phone: phone});
                }}>
                <Gradient colors={['#f4ff5f', commonValue.c_brand]} start={{x: 0, y: 1}} end={{x: 0.5, y: 0}}
                style={ dataCheck().check ? { opacity: 100 } : { opacity: 0 } } />
                <ContentText style={{color: '#ffffff' }}>
                    {dataCheck().msg}
                </ContentText>
            </BottomBtn>            
        </Container>
    );
};

export default UserInfoInput;