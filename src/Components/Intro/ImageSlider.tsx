import React, { useState } from 'react';
import { View, Image, ScrollView, NativeEventEmitter } from 'react-native';
import styles from '~/Components/Intro/ImageSliderStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
 
interface Props {
    images: {},
    width: number,
    height: number
}
const ImageSlider = ({ images, width, height }: Props) => {
 
    const [state, setState] = useState(0);
 
    const change = ( { nativeEvent } ) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== state) {
            setState(slide);
        }
    }
    
    return (
        <View style={[styles.container, {width, height}]}>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                style={[styles.scroll, {width, height}]}>
                {
                    images.map((image, index) => (
                        <Image
                            key={index}
                            resizeMode="stretch"
                            source={image.uri}
                            style={{width, height}} />
                    ))
                }
            </ScrollView>
            <View style={styles.pagination}>
                {
                    images.map((i, k) => (
                        ( k === state ?
                            <Icon5 key={k} 
                                name= 'circle'
                                style={styles.pagingActive}
                            />
                            :                            
                            <Icon key={k} 
                                name= 'circle'
                                style={styles.pagingIcon}
                            />
                        )
                    ))
                }
            </View>
        </View>
    );
};
 
 
 
export default ImageSlider;