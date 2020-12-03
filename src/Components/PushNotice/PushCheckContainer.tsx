import React, { useContext } from 'react';
import Styled from 'styled-components/native';
import { ContentTitleText, ContentText, SupplementText } from '~/Components/Common/TextStyles';
import commonValue from '~/Components/Common/commonValue';
import { RoundBtn } from '~/Components/Common/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { UserContext } from '~/Context/User';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';



type NavigationProp = StackNavigationProp<StackNaviParamList, 'PushNotice'>;
interface Props {
    navigation: NavigationProp;
    granted: string;
};

const Container = Styled.View`
    width: 100%;
    height: 40%;
    background-color: #ffffff;
    padding: 0 8% 0 8%;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`;

const TextBox = Styled.View`
    width: 100%;
    justify-content: flex-start;
`;

const BtnBox = Styled.View`
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20px;
`;

const Strong = Styled(ContentText)`
    color: ${commonValue.c_strong};
    font-weight: 700;
`;

const BottomBtn = Styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 30px;
    background-color: ${commonValue.c_supplement};
`;

const Gradient = Styled(LinearGradient)`
    width: 100%;
    height: 100%;
    position: absolute;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;


const PushCheckContainer = ({navigation, granted}: Props) => {
    const { checkPermission } = useContext<IUserContext>(UserContext);

    let date = new Date();
    const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    return(
        <Container>
            <TextBox>
                <ContentTitleText style={{marginBottom: 5}}>
                    { granted === 'agree' ?
                      '할인혜택 푸시알림 수신 동의'
                      : '할인혜택 푸시알림 수신 거부'
                    }
                </ContentTitleText>
                <SupplementText style={{marginBottom: 5}}>
                    {today}
                </SupplementText>
                <ContentText>
                    민트카 할인혜택 푸시알림 수신을
                    <Strong>
                        { granted === 'agree' ? ' 동의' : ' 거절' }
                    </Strong>
                    하셨습니다.
                </ContentText>
                <ContentText>
                    <Strong>설정 &gt; 할인혜택 푸시알림 on/off</Strong> 를 통해 수신여부를 변경하실 수 있습니다.
                </ContentText>
            </TextBox>
            <BtnBox>

                {/* <RoundBtn
                    onPress={ () =>{ 
                        AsyncStorage.setItem('checkPermission', 'check');
                        checkPermission(true);
                        navigation.replace('Intro');
                    }} >
                    <ContentText style={{color: '#ffffff', fontWeight: 'bold'}}>
                        확인
                    </ContentText>
                </RoundBtn> */}

                <BottomBtn
                onPress={ () =>{ 
                    AsyncStorage.setItem('checkPermission', 'check');
                    checkPermission(true);
                    navigation.replace('Intro');
                }} >
                    <Gradient colors={['#f4ff5f', commonValue.c_brand]} start={{x: 0, y: 1}} end={{x: 0.5, y: 0}} />
                    <ContentText style={{color: '#ffffff', fontWeight: 'bold'}}>
                        동의
                    </ContentText>
                </BottomBtn> 

            </BtnBox>
        </Container>
    );
};

export default PushCheckContainer;