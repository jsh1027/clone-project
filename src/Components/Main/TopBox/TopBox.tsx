import React from 'react';
import Styled from 'styled-components/native'
import TabButton from '~/Components/Main/TopBox/TabButton';
import BannerButton from '~/Components/Main/TopBox/BannerButton';
import { StackNavigationProp } from '@react-navigation/stack';


type NavigationProp = StackNavigationProp<StackNaviParamList, 'Main'>;
interface Props {
    navigation: NavigationProp;
};

const Container = Styled.View`
    width: 100%;
    height: 10%;
    flex-direction: row;
    align-items: center;
    padding: 0 3.5%;
`;


const TopBox = ({navigation}: Props) => {

    return(
        <Container>
            <TabButton navigation={navigation}/>
            <BannerButton navigation={navigation}/>
        </Container>
    );

};

export default TopBox;