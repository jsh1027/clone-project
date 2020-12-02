import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import { ContentText } from '~/Components/Common/TextStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RoundButton = Styled.View`
    width: 100%;
    height: 56px;
    border: 1px solid ${commonValue.c_unselect};
    border-radius: 30px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
`;

const Circle = Styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    background-color: ${commonValue.c_unselect};
`;

const CheckIcon = Styled(Icon)`
    font-size: 17px;
    color: #ffffff;
`;

const unselectedObj = {
    all: false,
    op1: false,
    op2: false,
    op3: false,
    op4: false,
    mkobj_all: false,
    mkobj1: false,
    mkobj2: false,
    mkobj3: false,
    mk2: false
};

const SelectAllBtn = ( {text, pressFC, color} )=>{

    return (
        <TouchableWithoutFeedback 
            onPress={()=> {
                pressFC();
        }}>
            <RoundButton>
                <Circle style={ color ? { backgroundColor: commonValue.c_brand } : { backgroundColor: commonValue.c_unselect } }>
                    <CheckIcon name='check' />
                </Circle>
                <ContentText>
                    {text}
                </ContentText>
            </RoundButton>
        </TouchableWithoutFeedback>
    );
};

export default SelectAllBtn;