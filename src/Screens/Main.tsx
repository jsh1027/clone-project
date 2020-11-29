import React from 'react';
import Styled from 'styled-components/native';
import TopBox from '~/Components/Main/TopBox/TopBox';
import BottomBox from '~/Components/Main/BottomBox/BottomBox';
import Map from '~/Components/Main/Map';
import { StackNavigationProp } from '@react-navigation/stack';
import commonValue from '~/Components/Common/commonValue';

type NavigationProp = StackNavigationProp<StackNaviParamList, 'Main'>;
interface Props {
    navigation: NavigationProp;
};


const SafeAreaView = Styled.SafeAreaView`
    flex: 1;
    justify-content: space-between;
`;


const Main = ({navigation}: Props) => {
    return (
        <SafeAreaView>
            <Map />
            <TopBox navigation={navigation} />
            <BottomBox />
        </SafeAreaView>
    );
};

export default Main;