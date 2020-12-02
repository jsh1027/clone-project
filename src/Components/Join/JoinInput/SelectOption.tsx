import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import { ContentText } from '~/Components/Common/TextStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { onChange } from 'react-native-reanimated';
import OptionRoundBtn from './OptionRoundBtn';

const Box = Styled.View`
    width: 87%;
    height: 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
`;

const TextBox = Styled.View`
    height: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const TouchIconBox = Styled.View`    
    flex-direction: row;
`;

const CheckIcon = Styled(Icon)`
    font-size: 17px;
    /* color: ${commonValue.c_unselect}; */
    margin-right: 12px;
`;

const Label = Styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #3d3d3d;    
    margin-right: 12px;
`;

const Title = Styled.Text`
    font-size: 14px;
    color: ${commonValue.c_unselect};
`;

const ArrowIcon = Styled(Icon)`
    font-size: 17px;
    color: ${commonValue.c_unselect};
`;

const SelectOption = ( { label, title, iconName, pressFC, color } ) => {

    return(
        <Box>
            <TextBox>
                <TouchableOpacity 
                    onPress={()=>{
                        pressFC();
                    }}
                >
                    <TouchIconBox> 
                        <CheckIcon name="check" style={ color ? { color: commonValue.c_brand } : { color: commonValue.c_unselect } } />
                        <Label>{label}</Label>
                    </TouchIconBox>
                </TouchableOpacity>
                <Title>{title}</Title>
            </TextBox>
            <ArrowIcon name={iconName} />
        </Box>
    );
}

export default SelectOption;