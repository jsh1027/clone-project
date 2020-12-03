import React, { useState } from 'react';
import Styled
 from 'styled-components/native'
import commonValue from '~/Components/Common/commonValue';
import Icon from 'react-native-vector-icons/Entypo'
import { normalize } from '~/Components/Common/TextStyles';
import { StackNavigationProp } from '@react-navigation/stack';



type NavigationProp = StackNavigationProp<StackNaviParamList, 'Main'>;
interface Props {
    navigation: NavigationProp;
};

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


const TabButton = ({navigation}: Props) => {
    const [ color, setColor ] = useState(commonValue.c_brand);
    const colorChange = (isPressed: boolean) => isPressed ? setColor('#ffffff') : setColor(commonValue.c_brand);

    return(
            <Tab 
                underlayColor={commonValue.c_brand}
                onPressIn={()=> colorChange(true)}
                onPressOut={()=> colorChange(false)}
                onPress={()=>navigation.navigate("MainDrawer")}
            >
                <TabIcon name="menu" color={color} />
            </Tab>
    );
};

export default TabButton;