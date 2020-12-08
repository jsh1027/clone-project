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
    height: 30%;
    position: absolute;
    justify-content: center;
    align-items: flex-end;
`;

const TextBtn = Styled.TouchableOpacity`
    flex: 1;
    width: 30%;
    justify-content: center;
    align-items: center;
`;

const TopTextBox = Styled.View`
    flex: 2;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const TopText = Styled.Text`
    font-size: 27px;
    font-weight: bold;
    text-align: center;
`;

const TopButtonBox = ({navigation}: Props) => {
    return(
        <Container>
            <TextBtn 
                onPress={ () => navigation.navigate('Main') }
            >
                <SupplementText style={{fontSize: 16}}>
                    둘러보기
                </SupplementText>
            </TextBtn>
            <TopTextBox>
                <TopText>일상의 이동을</TopText>
                <TopText>새로 그리다</TopText>
            </TopTextBox>
        </Container>
    );
};

export default TopButtonBox;