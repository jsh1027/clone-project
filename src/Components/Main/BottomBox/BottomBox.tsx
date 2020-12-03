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

const LocationSettingBtn = Styled.View`
    flex: 1;
    flex-direction: row;
    height: ${normalize(40)}px;
    justify-content: space-between;
    align-items: center;
    border-radius: ${normalize(45)}px;
    background-color: #ffffff;
    margin: ${normalize(5)}px;
    elevation: 4;
    overflow: hidden;
`;

const LocationTextBox = Styled.TouchableOpacity`
    flex-direction: row;
    height: ${normalize(40)}px;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
    margin-right: 5px;
    padding-left: 15px;
`;

const BtnText = Styled.Text`    
    font-size: ${normalize(16)}px;
    color: ${commonValue.c_supplement};
    margin-left: 5px;
`;

const SearchIcon = Styled(Icon)`    
    font-size: ${normalize(15)}px;
    color: ${commonValue.c_supplement};
`;

const LocationIcon = Styled(Icon)`    
    font-size: ${normalize(15)}px;
    color: ${commonValue.c_brand};
`;
const LocationBtn = Styled.TouchableHighlight`
    width: ${normalize(40)}px;
    height: ${normalize(40)}px;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`;


const BottomBox = ({pos, setPos}) => {

    return(
        <Container>
            <BtnBox style={{justifyContent: "flex-end"}}>
                <CircleButton iconName="key" />
            </BtnBox>
            <BtnBox>
                <LocationSettingBtn>
                    <LocationTextBox onPress={ () => console.log('!') } >
                        <>
                            <SearchIcon name="search" />
                            <BtnText>
                                어디에서 출발하세요?
                            </BtnText>
                        </>
                    </LocationTextBox>
                    <LocationBtn underlayColor={commonValue.c_click} onPress={() => setPos(pos+1) } >
                        <LocationIcon name="location-arrow" />
                    </LocationBtn>
                </LocationSettingBtn>
                <CircleButton iconName="clock-outline" />
                <CircleButton iconName="filter-plus" />
            </BtnBox>
        </Container>
    );

};

export default BottomBox;