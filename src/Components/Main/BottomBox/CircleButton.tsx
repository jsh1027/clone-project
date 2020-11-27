import React, { useState } from 'react';
import Styled from 'styled-components/native'
import commonValue from '~/Components/Common/commonValue';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { normalize } from '~/Components/Common/TextStyles';



const CircleBtn = Styled.TouchableHighlight`
    width: ${normalize(40)}px;
    height: ${normalize(40)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${normalize(45)}px;
    background-color: #ffffff;
    padding: ${normalize(5)}px;
    margin: ${normalize(5)}px;
    elevation: 4;
`;

const BtnIcon = Styled(Icon)`
    font-size: ${normalize(22)}px;
`;


interface Props {
    onPress?: () => void;
    iconName: string;
}
const CircleButton = (props: Props) => {
    const [ color, setColor ] = useState(commonValue.c_brand);
    const colorChange = (isPressed: boolean) => isPressed ? setColor('#ffffff') : setColor(commonValue.c_brand);

    return(
            <CircleBtn 
                underlayColor = {commonValue.c_brand}
                onPressIn = {()=> colorChange(true)}
                onPressOut = {()=> colorChange(false)}
            >
                <BtnIcon name={props.iconName} color={color} />
            </CircleBtn>
    );
};

export default CircleButton;