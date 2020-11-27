import React from 'react';
import Styled from 'styled-components/native'
import commonValue from '~/Components/Common/commonValue';
import { normalize, ContentText } from '~/Components/Common/TextStyles';
import Icon from 'react-native-vector-icons/Entypo'

const Banner = Styled.TouchableHighlight`
    flex: 6;
    height: 70%;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: ${normalize(10)}px;
    margin-left: 3%;
    elevation: 7;
`;

const Box = Styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 5%;
    overflow: hidden;
`;

const BannerText = Styled(ContentText)`
    flex: 9;
    font-size: ${normalize(15)}px;
    color: ${commonValue.c_content};
`;

const ArrowIcon = Styled(Icon)`
    flex: 1;
    font-size: ${normalize(25)}px;
    color: ${commonValue.c_supplement};
`;



interface Props {
    onPress?: () => void;
}
const BannerButton = (props: Props) => {
    let isPressed = false;
    const colorChange = (value: boolean) => isPressed = value;

    return(
            <Banner 
                underlayColor={commonValue.c_click}
                onPressIn={()=> colorChange(true)}
                onPressOut={()=> colorChange(false)}
            >
                <Box>
                    <BannerText numberOfLines={1} ellipsizeMode="tail">
                        지금 가입하면 50% 쿠폰팩 도착!
                    </BannerText>
                    <ArrowIcon name="chevron-right" />
                </Box>
            </Banner>
    );
};

export default BannerButton;