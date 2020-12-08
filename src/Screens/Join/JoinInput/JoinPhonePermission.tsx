import React, { useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Animated, Dimensions, StyleSheet,  Alert,  } from "react-native";
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';
import InputHeader from '~/Components/Join/JoinInput/InputHeader';
import { ContentText } from '~/Components/Common/TextStyles';
import SelectAllBtn from '~/Components/Join/JoinInput/SelectAllBtn';
import SelectOption from '~/Components/Join/JoinInput/SelectOption';
import OptionRoundBtn from '~/Components/Join/JoinInput/OptionRoundBtn';
import LinearGradient from 'react-native-linear-gradient';
import { selectedObj, unselectedObj, reverseValueFC } from '~/Components/Join/JoinInput/PhoneSelectFC';
import { checkSelect } from '~/Assets/Validate/validateFC';
import UserInfoInput from '~/Components/Join/JoinInput/UserInfoInput';


type NavigationProp = StackNavigationProp<StackNaviParamList>;
interface Props {
    navigation: NavigationProp;
    route: {
        params: string | undefined;
    };
};

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;
const fullHeight = Dimensions.get('window').height - 50;

const Container = Styled.View`
    width: ${windowW}px;
    height: ${windowH}px;
    position: absolute;
    background-color: transparent;
`;

const Sheet = Styled.View`
    width: 100%;
    height: ${fullHeight}px;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin-top: 50px;
`;

const HeaderBox = Styled.View`
    width: 100%;
    justify-content: flex-start;    
    padding: 7% 10% 0% 10%;
`;

const BottomBtn = Styled.TouchableOpacity`
    width: 100%;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: ${commonValue.c_supplement};
`;

const Gradient = Styled(LinearGradient)`
    width: 100%;
    height: 100%;
    position: absolute;
    justify-content: center;
    align-items: center;
`;

const ScrollView = Styled.View`
    width: ${windowW}px;
`;

const SelectBox = Styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 5% 10% 0% 10%;
`;

const MarketingBox = Styled.View`
    width: 70%;
    justify-content: center;
    align-items: flex-start;
`;

const OptionBox = Styled.View`
    width: 100%;    
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const OptionLabel = Styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #3d3d3d;    
    margin-right: 12px;
`;

const Cover = Styled.View`
    width: ${windowW}px;
    height: 230px;
    position: absolute;
    bottom: 0;

    background-color: #ffffff;
`;

const aStyle = StyleSheet.create({
    animationView: {
      width: windowW,
      height: fullHeight
    }
});



const JoinPhonePermission = ( { route, navigation }: Props ) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const componentIn = useRef(new Animated.Value(0)).current;
    const componentOut = useRef(new Animated.Value(1)).current;

    const slideAnim = useRef(new Animated.ValueXY({x:0, y: 90})).current;
    const slideIn = () => {
        Animated.timing(slideAnim, {
          toValue: { x: 0, y: -280 },
          useNativeDriver: true
        }).start();
    };
    const fadeIn = () => { Animated.timing( componentIn, { toValue: 1, duration: 500, useNativeDriver: true } ).start(); };
    const fadeOut = () => { Animated.timing( componentOut, { toValue: 0, duration: 800, useNativeDriver: true } ).start(); };


    React.useEffect(() => {
      Animated.timing( fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true } ).start();
      navigation.addListener('beforeRemove', (e) => {
        Animated.timing( fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true } ).start(); });

        if(route.params?.nextFocus === 'nameInput'){
            nameInput.current.focus();
        } else if (route.params?.nextFocus === 'phoneInput'){
            phoneInput.current.focus();
        }


    }, [fadeAnim, route.params?.citizenInfo, route.params?.agency,  route.params?.nextFocus]);


    const nameInput = useRef(null);
    const phoneInput = useRef(null);

    const [ stateObj, setStateObj ] = useState(unselectedObj);
    let msg = '';
    let isChecked = () => {
        const arr = [ stateObj.op1, stateObj.op2, stateObj.op3, stateObj.op4 ];
        let falseCount = 0;

        arr.forEach((v)=>{
            if( v === false ) falseCount = falseCount + 1;
        });

        if(falseCount > 0) {
            return false;
        } else {
            return true
        }
    };


    //select ALL
    const selectAllFC = ()=>{
        for (const [key, value] of Object.entries(stateObj)) {
            if( value === false ){ 
                fadeIn();
                fadeOut();
                slideIn();
                return selectedObj; 
            } else { 
                return unselectedObj; 
            }
        }
    };



    return(
        <Container>
            <Sheet>
                <Animated.View style={[aStyle.animationView, { opacity: fadeAnim }]} >

                    <HeaderBox>
                        <InputHeader 
                            navigation={navigation}
                            firstLine="휴대폰 본인인증을"
                            secondLine="진행해주세요"
                        />
                    </HeaderBox>

                    <Animated.View style={ { opacity: componentOut } } >
                        <ScrollView>
                            <SelectBox>
                                <SelectAllBtn text="본인인증 약관 모두 동의" 
                                    pressFC={ () => {
                                        setStateObj( selectAllFC() );
                                    } } 
                                    color={stateObj.all}
                                />

                                <SelectOption label='필수' title='개인정보 이용 동의' iconName='chevron-right' 
                                    pressFC={ () => {
                                        setStateObj( reverseValueFC(stateObj, "op1") ); 
                                    }}
                                    color={stateObj.op1}
                                />

                                <SelectOption label='필수' title='고유식별정보 처리 동의' iconName='chevron-right'
                                    pressFC={ () => {
                                        setStateObj( reverseValueFC(stateObj, "op2") ); 
                                    }}
                                    color={stateObj.op2}
                                />

                                <SelectOption label='필수' title='서비스 이용약관 동의' iconName='chevron-right'
                                    pressFC={ () => {
                                        setStateObj( reverseValueFC(stateObj, "op3") ); 
                                    }}
                                    color={stateObj.op3}
                                />

                                <SelectOption label='필수' title='통신사 이용약관 동의' iconName='chevron-right'
                                    pressFC={ () => {
                                        setStateObj( reverseValueFC(stateObj, "op4") ); 
                                    }}
                                    color={stateObj.op4}
                                />
                            </SelectBox>
                        </ScrollView>
                    </Animated.View>

                    <Animated.View style={{ transform: [{translateY: slideAnim.y}], opacity: componentIn }} >
                        <SelectBox>
                            <UserInfoInput 
                            nameInput={nameInput}
                            phoneInput={phoneInput}
                            citizenInfo={route.params?.citizenInfo}
                            agency={route.params?.agency}
                            navigation={navigation} />
                        </SelectBox>
                    </Animated.View>

                    {/* <Cover /> */}

                </Animated.View>
            </Sheet>
        </Container>
    );
};


export default JoinPhonePermission;
