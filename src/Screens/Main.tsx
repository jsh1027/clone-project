import React, { useState } from 'react';
import Styled from 'styled-components/native';
import TopBox from '~/Components/Main/TopBox/TopBox';
import BottomBox from '~/Components/Main/BottomBox/BottomBox';
import Map from '~/Components/Main/Map';
import { StackNavigationProp } from '@react-navigation/stack';
import commonValue from '~/Components/Common/commonValue';
import Geolocation from 'react-native-geolocation-service';


type NavigationProp = StackNavigationProp<StackNaviParamList, 'Main'>;
interface Props {
    navigation: NavigationProp;
};


const SafeAreaView = Styled.SafeAreaView`
    flex: 1;
    justify-content: space-between;
`;


const Main = ({navigation}: Props) => {
    const [ pos, setPos ] = useState(1);

    return (
        <SafeAreaView>
            <Map pos={pos} navigation={navigation}/>
            <TopBox navigation={navigation} />
            <BottomBox pos={pos} setPos={setPos}/>
        </SafeAreaView>
    );
};

export default Main;