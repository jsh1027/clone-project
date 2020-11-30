import React from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import commonValue from '~/Components/Common/commonValue';

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


const Input = ( props ) => (
    
    <InputBox>
        <TextInput
        autoFocus={props.autoFocus}
        textContentType={props.textContentType}
        autoCompleteType={props.autoCompleteType}
        selectionColor={commonValue.c_brand}
        placeholder={props.placeholder}
        />
        <InputBorder 
        style={{backgroundColor: props.borderColor}}
        />
    </InputBox>
);

export default Input;

