import React, { useState, useEffect } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import NaverMapView, { Circle, Marker, MarkerProps, Path, Polyline, Polygon, NaverMapViewProps } from 'react-native-nmap';
import Geolocation from 'react-native-geolocation-service';
import Styled from 'styled-components/native'
import Loading from '~/Components/Common/Loading';

const Container = Styled.SafeAreaView`
    width: 100%;
    height: 100%;
    position: absolute;
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



const Map = (props: NaverMapViewProps) => { 
    const [ location, setLocation ] = useState({latitude: 37.564362, longitude: 126.977011});

    useEffect(() => {
        requestPermission().then(res => {
            console.log({ res });
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
        });
    }, []);
 

    if (!location) {
        return (
            <Loading />
        );
    }
      
    return(
        <Container>
            <NaverMapView style={{width: '100%', height: '100%'}}
                showsMyLocationButton={true}
                
                zoomControl={false}
                center={{...location, zoom: 16}}
                onTouch={e => console.log('onTouch', JSON.stringify(e.nativeEvent))}
                onCameraChange={e => console.log('onCameraChange', JSON.stringify(e))}
                onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
            >
            </NaverMapView>
        </Container>
    );

};

export default Map;