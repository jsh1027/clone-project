import React, { useRef, useState } from 'react';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import LinearGradient from 'react-native-linear-gradient';
import { ContentTitleText, SupplementText, TitleText } from '~/Components/Common/TextStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import BottomSheet from 'reanimated-bottom-sheet';
import LoginDefaultBtnsBox from '~/Components/Login/LoginDefaultBtnsBox';
import LoginAnotherBtnsBox from '~/Components/Login/LoginAnotherBtnsBox';
import { Dimensions, Animated, View } from 'react-native';
import SheetHeader from '~/Components/Login/SheetHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const windowH = Dimensions.get('window').height;
const windowW = Dimensions.get('window').width;
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
    background-color: transparent;
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


const TouchableOpacity = Styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin-bottom: 10px;
`;

const LoginBtnsContainer = Styled.View`
  width: 100%;
  height: ${fullHeight}px;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  padding: 30px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;


const BottomButtonBox = ({navigation}: Props) => {
    const sheetRef: React.RefObject<any> = useRef();
    const [ isDefault, setIsDefault ] = useState(true);
    const initView = () => {
        fadeOut();
        setIsDefault(true);
    };
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start();
    };
  
    function fadeOut (){
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true
      }).start();
    };

    const LoginBtnsSheet = () => {  
        return (
            <LoginBtnsContainer>
                {isDefault ? 
                <Icon name="close"
                    size={35}
                    style={{position: 'absolute', right: 30, top: 30}}
                />
                : 
                <SheetHeader />}
                    <LoginDefaultBtnsBox />

                {isDefault 
                ? <TouchableOpacity onPress={ () => { setIsDefault(false); sheetRef.current.snapTo(2); } }>
                        <SupplementText>
                            다른 방법으로 로그인
                        </SupplementText>
                    </TouchableOpacity>
                : <LoginAnotherBtnsBox />
            }
            </LoginBtnsContainer>
        );    
    };
 
    
    return (
        <>                
            <Animated.View
            style={
                {
                    position: 'absolute',
                    width: windowW,
                    height: windowH,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    opacity: fadeAnim // Bind opacity to animated value
                }
            }            
            />
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
                            onPress={()=> navigation.navigate('Join')}
                        >
                            <ContentTitleText>회원가입</ContentTitleText>
                        </Button>
                    </Box>
                </Shadow>
            </Container>



            <BottomSheet
            ref={sheetRef}
            snapPoints={[0, 330, fullHeight]}
            renderContent={LoginBtnsSheet}
            initialSnap={0}
            enabledGestureInteraction={!isDefault}       
            enabledInnerScrolling={false} 
            enabledContentTapInteraction={false}
            onCloseStart={initView}
            onOpenStart={fadeIn}
            />          
        </>
    );
};

export default BottomButtonBox;





