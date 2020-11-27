import React, { useEffect, useRef } from 'react';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import LinearGradient from 'react-native-linear-gradient';
import { ContentTitleText } from '~/Components/Common/TextStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import BottomSheet from 'reanimated-bottom-sheet';
import LoginBottomSheet from '~/Components/Login/LoginBottomSheet';
import { Dimensions } from 'react-native';


const fullHeight = Dimensions.get('window').height - 50;


type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};

const Container = Styled.View`
    flex: 2;
    background-color: transparent;
`;

const Shadow = Styled(LinearGradient)`
    flex: 1;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    flex-direction: row-reverse;
`;

const Box = Styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    margin-top: 15px;
    overflow: hidden;
`;

const Line = Styled.View`
    width: 2px;
    height: 30%;
    background-color: ${commonValue.c_supplement};
`;

const Button = Styled.TouchableOpacity`
    flex: 1;
    height: 100%;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
`;

const AnimationView = Styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
`;



const BottomButtonBox = ({navigation}: Props) => {
    
    const sheetRef: React.RefObject<any> = useRef();
    
    return (
        <>
            <Container>
                <Shadow
                    locations={[0, 0.7]}
                    colors={['rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 0.4)']}
                >
                    <Box>
                        <Button 
                            onPress={()=> sheetRef.current.snapTo(1)}
                        >
                            <ContentTitleText>로그인</ContentTitleText>
                        </Button>
                        <Line />
                        <Button
                            onPress={()=> console.log('HI')}
                        >
                            <ContentTitleText>회원가입</ContentTitleText>
                        </Button>
                    </Box>
                </Shadow>
            </Container>



            <LoginBottomSheet sheetRef={sheetRef} />  

        </>
    );
};

export default BottomButtonBox;





