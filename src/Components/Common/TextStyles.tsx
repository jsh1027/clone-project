import { Dimensions, Platform, PixelRatio } from 'react-native';
import Styled from 'styled-components/native';
import commonValue from '~/Components/Common/commonValue';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const scale = screenWidth / 320;    //iphone5 width

function normalize(size: number) {
    const newSize = size * scale;
    if ( Platform.OS === 'ios' ) {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}

const TitleText = Styled.Text`
    font-size: ${normalize(25)}px;
    color: ${commonValue.c_title};
    font-weight: bold;
`;

const ContentTitleText = Styled.Text`
    font-size: ${normalize(22)}px;
    color: ${commonValue.c_title};
    font-weight: bold;
`;

const ContentText = Styled.Text`
    font-size: ${normalize(18)}px;
    color: ${commonValue.c_content};
`;

const SupplementText = Styled.Text`
    font-size: ${normalize(15)}px;
    color: ${commonValue.c_supplement};
`;

const BottomBtnText = Styled.Text`
    font-size: ${normalize(22)}px;
    color: #ffffff;
    font-weight: bold;
`;


export {
    normalize,
    TitleText,
    ContentTitleText,
    ContentText,
    SupplementText,
    BottomBtnText
};