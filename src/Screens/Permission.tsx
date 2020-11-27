import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import Styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SupplementText, TitleText, BottomBtnText } from '~/Components/Common/TextStyles';
import PermissionList from '~/Components/Permission/PermissionList';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomBtn } from '~/Components/Common/Button';
import commonValue from '~/Components/Common/commonValue';


type NavigationProp = StackNavigationProp<StackNaviParamList, 'Permission'>;
interface Props {
    navigation: NavigationProp;
};

const SafeAreaView = Styled.SafeAreaView`
    flex: 1;
    /* padding-top: ${commonValue.sb_margintop}px; */
`;

const Container = Styled.SafeAreaView`
    flex:1;
    justify-content: center;
    padding: 0 5% 0 5%;
`;

const TitleBox = Styled.View`
    flex: 2;
    justify-content: flex-end;
`;
    
const PermissionListBox = Styled.View`
    flex: 4;
    justify-content: center;
`;

const AnnounceBox = Styled.View`
    flex: 3;
    justify-content: flex-start;
`;

const SupplementBox = Styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;




const Permission = ({navigation}: Props) => {
    
    useEffect(
        ()=>{
            CameraPermission().then(
                () => LocationPermission()
            );            
        }, [] );


    const CameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("카메라 권한 허용");
            } else {
                // LocationPermission();
                console.log("카메라 권한 거부");
            }
        } catch (err) {
            console.warn(err);
        }
    };
    
    const LocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("위치 권한 허용");
            } else {
                console.log("위치 권한 거부");
            }
        } catch (err) {
            console.warn(err);
        }
    };
        


    return (
        <SafeAreaView>
            <Container>

                <TitleBox>
                    <TitleText>
                        편리한 그린카 사용을 위해
                    </TitleText>
                    <TitleText>
                        권한을 허용해주세요
                    </TitleText>
                </TitleBox>

                <PermissionListBox>
                    <PermissionList />
                </PermissionListBox>

                <AnnounceBox>
                    <SupplementBox>
                        <Icon style={{margin: 10}} name="ellipse-sharp" size={7} color={commonValue.c_supplement}/>
                        <SupplementText style={{flex: 10}}>
                            특정 기능 이용 시 허용이 필요하며, 허용하지 않아도 해당 기능 외의 서비스를 이용하실 수 있어요.
                        </SupplementText>
                    </SupplementBox>
                    <SupplementBox>
                        <Icon style={{margin: 10}} name="ellipse-sharp" size={7} color={commonValue.c_supplement}/>
                        <SupplementText style={{flex: 10}}>
                            휴대폰 '설정 &gt; 민트카 &gt; 권한'에서도 접근 권한 변경을 하실 수 있어요.
                        </SupplementText>
                    </SupplementBox>                
                </AnnounceBox>
                
            </Container>

            <BottomBtn onPress={ () =>  navigation.replace('PushNotice') }>
                <BottomBtnText>확인</BottomBtnText>
            </BottomBtn>
        </SafeAreaView>
    );
};

export default Permission;