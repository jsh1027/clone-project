import React, { useState, useEffect } from 'react';
import { Platform, PermissionsAndroid, Text } from 'react-native';
import NaverMapView, { Circle, Marker, MarkerProps, Path, Polyline, Polygon, NaverMapViewProps } from 'react-native-nmap';
import Geolocation from 'react-native-geolocation-service';
import Styled from 'styled-components/native'
import Loading from '~/Components/Common/Loading';
import { FlatList } from 'react-native';
import { JsonData } from '~/Assets/Data/jsonData';
import { PermissionDB } from '~/Assets/Data/PermissionDB';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<StackNaviParamList>;
interface Props {
    navigation: NavigationProp;
};

const Container = Styled.SafeAreaView`
    width: 100%;
    height: 100%;
    position: absolute;
`;
const View = Styled.View`
    width: 100%;
    height: 10%;
    position: absolute;
    margin-top: 50%;
    background-color: #ffffff;
`;



async function requestPermission() { 
    try {
        if (Platform.OS === 'ios') {
            return await Geolocation.requestAuthorization('always');
        }
 
        if (Platform.OS === 'android') {
            return await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        }
    } catch (e) {
        console.warn(e);
    }
}


const DataMaker = ({item})=>(
    <Marker 
        coordinate={{latitude: parseInt(item.ycode), longitude: parseInt(item.xcode)}} onClick={() => console.warn('onClick! p0')}/>
);

const DataMaker2 = ({item})=>(
    <View>
        <Text>{item.content}</Text>
    </View>
);


const Map = ( {navigation, pos}) => { 
    const [ location, setLocation ] = useState({latitude: 37.5072264964, longitude: 127.0230319441});

    const myLocation = () => {
        Geolocation.getCurrentPosition(
            pos => { setLocation(pos.coords) },
            err => { console.warn(err) },
            {
                enableHighAccuracy: true,
                timeout: 3600,
                maximumAge: 3600,
            },
        );
    };


    useEffect(() => {
        requestPermission().then(res => {
            console.log(pos);

            if (res === 'granted') {
                Geolocation.getCurrentPosition(
                    pos => { setLocation(pos.coords) },
                    err => { console.warn(err) },
                    {
                        enableHighAccuracy: true,
                        timeout: 3600,
                        maximumAge: 3600,
                    },
                );
            }

            if (pos) {
                myLocation();
            }
        });
    }, [pos]);


    if (!location) {
        return (
            <Loading />
        );
    }
      
    return(
        <Container>
            <NaverMapView style={{width: '100%', height: '100%'}}
                showsMyLocationButton={false}
                
                zoomControl={false}
                center={{...location, zoom: 16}}
                onTouch={e => console.log('onTouch', JSON.stringify(e.nativeEvent))}
                onCameraChange={e => setLocation({latitude: e.latitude, longitude: e.longitude})}
                onMapClick={e => console.log('onMapClick', JSON.stringify(e))}
                zoomGesturesEnabled={true}
            >

                <Marker coordinate={{latitude: 37.511787 , longitude: 127.021287}} onClick={() => navigation.navigate('MainModal')}
                    image={require('~/Assets/Icons/marker_icon.png')}/>
                <Marker coordinate={{latitude: 37.5072264964, longitude: 127.0230319441}} onClick={() => navigation.navigate('MainModal')} image={require('~/Assets/Icons/marker_icon.png')}/>
                <Marker coordinate={{latitude: 37.512884, longitude: 127.020214}} onClick={() => navigation.navigate('MainModal')} image={require('~/Assets/Icons/marker_icon.png')}/>
                <Marker coordinate={{latitude: 37.514566, longitude: 127.024126}} onClick={() => navigation.navigate('MainModal')} image={require('~/Assets/Icons/marker_icon.png')}/>
                <Marker coordinate={{latitude: 37.508631, longitude: 127.008256}} onClick={() => navigation.navigate('MainModal')} image={require('~/Assets/Icons/marker_icon.png')}/>
                <Marker coordinate={{latitude: 37.512647, longitude: 127.010442}} onClick={() => navigation.navigate('MainModal')} image={require('~/Assets/Icons/marker_icon.png')}/>



            </NaverMapView>
            {/* <View>
                <Text>
                    {JsonData[0].xcode}
                </Text>
            </View> */}
        </Container>
    );

};

export default Map;