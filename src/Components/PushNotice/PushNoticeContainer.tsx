import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import Styled from 'styled-components/native';
import { ContentTitleText, ContentText, SupplementText } from '~/Components/Common/TextStyles';
import { RoundBtn } from '~/Components/Common/Button';
import commonValue from '~/Components/Common/commonValue';
import LinearGradient from 'react-native-linear-gradient';


const Container = Styled.View`
    width: 100%;
    height: 40%;
    background-color: #ffffff;
    padding: 20px 35px;
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
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`;

const TextBtn = Styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
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

interface Props{ 
    setGranted: React.Dispatch<React.SetStateAction<undefined | string>>;
};
const PushNoticeContainer = ({ setGranted }: Props) => {

    const pushPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECEIVE_WAP_PUSH,
                {
                    title: "민트카에서 알림을 보내고자 합니다.",
                    message:
                    "경고, 사운드 및 아이콘 배지가 알림에 포함될 수 있습니다."
                    +"설정에서 이를 구성할 수 있습니다.",
                    buttonNegative: "허용안함",
                    buttonPositive: "허용"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                setGranted('agree');
                console.log("알림 권한 허용");
            } else {
                console.log("알림 권한 거부");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    return(
        <Container>

            <TextBox>
                <ContentTitleText style={{marginBottom: 5}}>
                    할인혜택 푸시알림 안내
                </ContentTitleText>
                <ContentText>할인혜택 푸시알림 수신에 동의하시면 특가 / 이벤트 / 쿠폰 등 각종 유용한 정보를 받아보실 수 있습니다.</ContentText>
            </TextBox>

            <BtnBox>
                <BottomBtn
                    onPress={()=>{ pushPermission(); }}>
                    <Gradient colors={['#f4ff5f', commonValue.c_brand]} start={{x: 0, y: 1}} end={{x: 0.5, y: 0}} />
                    <ContentText style={{color: '#ffffff', fontWeight: 'bold'}}>
                        동의
                    </ContentText>
                </BottomBtn>  

                {/* <RoundBtn style={{marginBottom: 5}}
                          onPress={ () => {
                                pushPermission();
                              } }>
                    <ContentText style={{color: '#ffffff', fontWeight: 'bold'}}>
                        동의
                    </ContentText>
                </RoundBtn> */}
                
                <TextBtn onPress={ () => setGranted('disagree')}>
                    <SupplementText style={{textDecorationLine: 'underline'}}>
                        나중에
                    </SupplementText>
                </TextBtn>
            </BtnBox>

        </Container>
    );
};

export default PushNoticeContainer;