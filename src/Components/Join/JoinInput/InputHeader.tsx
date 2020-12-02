import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import { TitleText } from '~/Components/Common/TextStyles';
import Icon from 'react-native-vector-icons/Ionicons';



type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
    firstLine?: string | undefined;
    secondLine?: string | undefined;
    iconName?: string;
};


const HeaderBox = Styled.View`
    width: 100%;
    justify-content: center;
    align-items: flex-start;
`;

const TitleBox = Styled.View`
    width: 100%;
    height: 80px;    
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px 0px;
`;

const IconBox = Styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-self: flex-start;
`;

const BackIcon = Styled(Icon)`
    color: ${commonValue.c_supplement};
    font-size: 30px;
`;


const InputHeader = ( { navigation, firstLine, secondLine, iconName }: Props ) => (
    <HeaderBox>
        <IconBox onPress={()=>navigation.goBack()}>
            <BackIcon name={iconName ? iconName : 'chevron-back'} />
        </IconBox>
        <TitleBox>
            <TitleText>{firstLine}</TitleText> 
            <TitleText>{secondLine}</TitleText>
        </TitleBox>
    </HeaderBox>
);

export default InputHeader;
