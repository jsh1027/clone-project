import React, { useState } from 'react';
import Styled
 from 'styled-components/native'
import commonValue from '~/Components/Common/commonValue';
import Icon from 'react-native-vector-icons/Entypo'
import { normalize } from '~/Components/Common/TextStyles';

const Tab = Styled.TouchableHighlight`
    flex: 1;
    height: 70%;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: ${normalize(10)}px;
    elevation: 7;
`;

const TabIcon = Styled(Icon)`
    font-size: ${normalize(32)}px;
`;

interface Props {
    onPress?: () => void;
}
const TabButton = (props: Props) => {
    const [ color, setColor ] = useState(commonValue.c_brand);
    const colorChange = (isPressed: boolean) => isPressed ? setColor('#ffffff') : setColor(commonValue.c_brand);

    return(
            <Tab 
                underlayColor={commonValue.c_brand}
                onPressIn={()=> colorChange(true)}
                onPressOut={()=> colorChange(false)}
            >
                <TabIcon name="menu" color={color} />
            </Tab>
    );
};

export default TabButton;