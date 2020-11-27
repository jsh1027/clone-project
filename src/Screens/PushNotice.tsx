import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import PushNoticeContainer from '~/Components/PushNotice/PushNoticeContainer';
import PushCheckContainer from '~/Components/PushNotice/PushCheckContainer';
import commonValue from '~/Components/Common/commonValue';

type NavigationProp = StackNavigationProp<StackNaviParamList, 'PushNotice'>;
interface Props {
    navigation: NavigationProp;
};


const Container = Styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    /* padding-top: ${commonValue.sb_margintop}px; */
`;

const Background = Styled.ImageBackground`
    flex: 1;
    justify-content: center;
`;

const OpacityConatiner = Styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    justify-content: flex-end;
`;


const PushNotice = ({navigation}: Props) => {
    const [ granted, setGranted ] = useState<string | undefined>(undefined);

    return(
        <Container>
            <Background source={require('~/Assets/Images/app_splash.png')}>
                <OpacityConatiner>
                {granted === undefined ?
                    <PushNoticeContainer setGranted={setGranted} />
                    :
                    <PushCheckContainer navigation={ navigation } granted={ granted } />
                }
                </OpacityConatiner>
            </Background>
        </Container>
    );
};

export default PushNotice;