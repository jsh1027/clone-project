import React from 'react';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import { SupplementText } from '~/Components/Common/TextStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationAction } from '@react-navigation/native';

type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};

const Container = Styled.View`
    width: 100%;
    height: 10%;
    position: absolute;
    justify-content: center;
    align-items: flex-end;
    /* padding-top: ${commonValue.sb_margintop}px; */
`;

const TextBtn = Styled.TouchableOpacity`
    width: 30%;
    align-items: center;
`;

const TopButtonBox = ({navigation}: Props) => {
    return(
        <Container>
            <TextBtn 
                onPress={ () => navigation.navigate('Main', undefined) }
            >
                <SupplementText>둘러보기</SupplementText>
            </TextBtn>
        </Container>
    );
};

export default TopButtonBox;