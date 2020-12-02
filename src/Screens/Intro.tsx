import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import Styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import BottomButtonBox from '~/Components/Intro/BottomButtonBox';
import TopButtonBox from '~/Components/Intro/TopButtonBox';
import ImageSlider from '~/Components/Intro/ImageSlider';
import commonValue from '~/Components/Common/commonValue';


type NavigationProp = StackNavigationProp<StackNaviParamList, 'Intro'>;
interface Props {
    navigation: NavigationProp;
};

const Container = Styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    /* padding-top: ${commonValue.sb_margintop}px; */
`;

const SliderBox = Styled.View`
    flex: 12;
    background-color: #ffffff;
`;

const images: {} = [
    { uri: require('~/Assets/Images/SlideImages/img_1.jpg') },
    { uri: require('~/Assets/Images/SlideImages/img_2.jpg') },
    { uri: require('~/Assets/Images/SlideImages/img_3.jpg') },
    { uri: require('~/Assets/Images/SlideImages/img_4.jpg') },
    { uri: require('~/Assets/Images/SlideImages/img_5.jpg') },
];
 
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const Intro = ({navigation}: Props) => {
    useEffect(()=>{(navigation)},[])
    return(
        <Container>
            <SliderBox> 
                <ImageSlider images={images} height={windowHeight-130} width={windowWidth} />
            </SliderBox>
            <TopButtonBox navigation={navigation} />
            <BottomButtonBox navigation={navigation} />
        </Container>
    );
};

export default Intro;