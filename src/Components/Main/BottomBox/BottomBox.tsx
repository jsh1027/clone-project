import React from 'react';
import Styled from 'styled-components/native'
import commonValue from '../../Common/commonValue';
import CircleButton from '~/Components/Main/BottomBox/CircleButton';
import { normalize } from '~/Components/Common/TextStyles';
import Icon from 'react-native-vector-icons/FontAwesome5'


const Container = Styled.View`
    width: 100%;
    height: 20%;
    margin-bottom: 10%;
`;

const BtnBox = Styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 3%;
`;

const LocationSettingBtn = Styled.TouchableHighlight`
    flex: 1;
    flex-direction: row;
    height: ${normalize(40)}px;
    justify-content: space-around;
    align-items: center;
    border-radius: ${normalize(45)}px;
    background-color: #ffffff;
    padding: 0px ${normalize(10)}px;
    margin: ${normalize(5)}px;
    elevation: 4;
`;

const BtnText = Styled.Text`    
    font-size: ${normalize(16)}px;
    color: ${commonValue.c_supplement};
`;

const LocationIcon = Styled(Icon)`    
    font-size: ${normalize(17)}px;
    color: ${commonValue.c_brand};
`;

const BottomBox = () => {
    
    return(
        <Container>
            <BtnBox style={{justifyContent: "flex-end"}}>
                <CircleButton iconName="key" />
            </BtnBox>
            <BtnBox>
                <LocationSettingBtn 
                    underlayColor={commonValue.c_click} onPress={()=>console.log("d")} >
                    <>
                        <LocationIcon name="search" />
                        <BtnText>
                            어디에서 출발하세요?
                        </BtnText>
                        <LocationIcon name="location-arrow" />
                    </>
                </LocationSettingBtn>
                <CircleButton iconName="clock-outline" />
                <CircleButton iconName="filter-plus" />
            </BtnBox>
        </Container>
    );

};

export default BottomBox;