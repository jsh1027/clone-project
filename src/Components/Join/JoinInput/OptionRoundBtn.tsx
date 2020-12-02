import React from 'react';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Button = Styled.TouchableOpacity`
    height: 34px;
    border-radius: 30px;
    padding: 8px 12px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    /* background-color: ${commonValue.c_unselect}; */
`
const Text = Styled.Text`
    font-size: 14px;
    color: #ffffff;
`;

const ArrowIcon = Styled(Icon)`
    font-size: 10px;
    color: #ffffff;
    margin-right: 3px;
`;

const OptionRoundBtn = ({text, pressFC, color}) => (
    <Button 
        style={ color ? { backgroundColor: commonValue.c_brand } : { backgroundColor: commonValue.c_unselect } }
        onPress={()=> pressFC()}
    >
        <ArrowIcon name='check'/>
        <Text>{text}</Text>
    </Button>    
);

export default OptionRoundBtn;