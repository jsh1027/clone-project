import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Dimensions } from 'react-native';
import Styled from 'styled-components/native';
import { SupplementText } from '~/Components/Common/TextStyles';


type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};

const fullHeight = Dimensions.get('window').height - 50;

const Button = Styled.TouchableOpacity`
    width: 100%;
    height: 90px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;


const LoginAnotherButton = ( { navigation }: Props ) => {
    return(
        <Button
        onPress={()=> navigation.navigate('LoginAnotherSelect')}
        >
            <SupplementText style={{textDecorationLine: 'underline'}} allowFontScaling={false} >
                다른 방법으로 로그인?
            </SupplementText>
        </Button>
    );
};


export default LoginAnotherButton;