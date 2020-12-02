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
import { selectedObj, unselectedObj, reverseValueFC, mkObjSelectFC, mkOptionSelectFC } from '~/Components/Join/JoinInput/SelectFC';
import { checkSelect } from '~/Assets/Validate/validateFC';



type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
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

const ScrollView = Styled.ScrollView`
    width: ${windowW}px;
    padding: 5% 10% 0% 10%;
`;

const SelectBox = Styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
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

const aStyle = StyleSheet.create({
    animationView: {
      width: windowW,
      height: fullHeight
    }
});



const JoinPermissionSelect = ( { route, navigation }: Props ) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      Animated.timing( fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true } ).start();
      navigation.addListener('beforeRemove', (e) => {
        Animated.timing( fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true } ).start(); });
        
    }, [fadeAnim])


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
    // const test = () => {
    //     console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    //     for (const [key, value] of Object.entries(stateObj)) {
    //         console.log(`[key] ${key} / [value] ${value}`);
    //     }
    //     console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    // };


    //select ALL
    const selectAllFC = ()=>{
        for (const [key, value] of Object.entries(stateObj)) {
            if( value === false ){ return selectedObj; }
                else { return unselectedObj; }
        }
    };



    return(
        <Container>
            <Sheet>
                <Animated.View style={[aStyle.animationView, { opacity: fadeAnim }]} >

                    <HeaderBox>
                        <InputHeader 
                            navigation={navigation}
                            firstLine="고객님의"
                            secondLine="동의가 필요해요"
                            iconName='close'
                        />
                    </HeaderBox>


                    <ScrollView>
                        <SelectBox>
                            <SelectAllBtn text="민트카 약관 모두 동의" 
                                pressFC={ () => {
                                    setStateObj( selectAllFC() );
                                } } 
                                color={stateObj.all}
                            />

                            <SelectOption label='필수' title='그린카 회원 이용약관' iconName='chevron-right' 
                                pressFC={ () => {
                                    setStateObj( reverseValueFC(stateObj, "op1") ); 
                                }}
                                color={stateObj.op1}
                            />

                            <SelectOption label='필수' title='개인정보 수집/이용' iconName='chevron-right'
                                pressFC={ () => {
                                    setStateObj( reverseValueFC(stateObj, "op2") ); 
                                }}
                                color={stateObj.op2}
                            />

                            <SelectOption label='필수' title='위치기반 서비스 이용약관' iconName='chevron-right'
                                pressFC={ () => {
                                    setStateObj( reverseValueFC(stateObj, "op3") ); 
                                }}
                                color={stateObj.op3}
                            />

                            <SelectOption label='필수' title='위치기반 서비스 이용약관' iconName='chevron-right'
                                pressFC={ () => {
                                    setStateObj( reverseValueFC(stateObj, "op4") ); 
                                }}
                                color={stateObj.op4}
                            />

                            <SelectOption label='선택' title='마케팅 목적 정보수집/이용' iconName='chevron-down'
                                pressFC={ () => {
                                    setStateObj( mkObjSelectFC(stateObj, "mkobj_all") ); 
                                }}
                                color={stateObj.mkobj_all}
                            />
                            <MarketingBox>
                                <OptionLabel>
                                    전체 동의 시 <OptionLabel style={{color: commonValue.c_brand}}>1000P</OptionLabel> 및 혜택 제공
                                </OptionLabel>
                                <OptionBox>
                                    <OptionRoundBtn text='이메일'
                                        pressFC={()=> setStateObj( mkOptionSelectFC(stateObj, 'mkobj1') ) }
                                        color={stateObj.mkobj1}
                                    />
                                    <OptionRoundBtn text='SMS'
                                        pressFC={()=> setStateObj( mkOptionSelectFC(stateObj, 'mkobj2') ) }
                                        color={stateObj.mkobj2}
                                    />
                                    <OptionRoundBtn text='해피콜'
                                        pressFC={()=> setStateObj( mkOptionSelectFC(stateObj, 'mkobj3') ) }
                                        color={stateObj.mkobj3}
                                    />
                                </OptionBox>
                            </MarketingBox>

                            <SelectOption label='선택' title='개인정보 제 3자 제공' iconName='chevron-down'
                                pressFC={ () => {
                                    setStateObj( reverseValueFC(stateObj, "mk2") ); 
                                }}
                                color={stateObj.mk2}
                            />
                        </SelectBox>
                    </ScrollView>
                    


                    <BottomBtn 
                    onPress={()=>{ navigation.navigate('JoinPhonePermission') }} 
                    disabled={!isChecked()}>
                        <Gradient colors={['#f4ff5f', commonValue.c_brand]} start={{x: 0, y: 1}} end={{x: 0.5, y: 0}}
                            style={isChecked() ? { opacity: 100 } : { opacity: 0 }} />
                        <ContentText style={{color: '#ffffff'}}>
                            { checkSelect({isChecked, msg}).msg }
                        </ContentText>
                    </BottomBtn>

                </Animated.View>
            </Sheet>
        </Container>
    );
};


export default JoinPermissionSelect;
