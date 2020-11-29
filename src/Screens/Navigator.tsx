import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {UserContext} from '~/Context/User';
import Loading from '~/Components/Common/Loading';
import { StatusBar } from 'react-native';



import Permission from '~/Screens/Permission';
import PushNotice from '~/Screens/PushNotice';
import Intro from '~/Screens/Intro';
import Main from '~/Screens/Main';
import TestBottomSheet from '~/LoginTest/TestBottomSheet';


const PermissionStack = createStackNavigator();
const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function PermissionNavi() {
    return (
        <PermissionStack.Navigator 
            headerMode="none"
        >       
            <PermissionStack.Screen 
                name="Permission" component={Permission} 
            />
            <PermissionStack.Screen 
                name="PushNotice" component={PushNotice} 
                options={{
                    ...TransitionPresets.SlideFromRightIOS,
                }}    
            />
            <PermissionStack.Screen name="Intro" component={Intro} />        
            <PermissionStack.Screen name="Main" component={Main} />          
        </PermissionStack.Navigator>
    );
};

//=== Main
function MainNavi() {
    return (
        <MainStack.Navigator 
            headerMode="none"
            initialRouteName="Main"
        >
            <MainStack.Screen name="Main" component={Main} />            
            <MainStack.Screen name="Intro" component={Intro} />                    
        </MainStack.Navigator>
    );
};

//=== Root
function RootNavi() {
    return (
        <RootStack.Navigator 
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: 'transparent' },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: 'clamp',
                }),
              },
            }),
          }}        
            mode="modal"
        >
            <RootStack.Screen name="MainStack" component={MainNavi} />            
            <RootStack.Screen name="LoginModal" component={TestBottomSheet} />                  
        </RootStack.Navigator>
    );
};

export default () => {
    const {isLoading, permission} = useContext<IUserContext>(UserContext);

    
    if (isLoading === false) {
        return <Loading />;
    }
    
    return (
        <NavigationContainer>
        {/* <StatusBar barStyle='dark-content' translucent={true} backgroundColor='rgba(0,0,0,0)' /> */}
        {console.log("context>>222>>>>>>>",permission)}
        {
            permission ? <RootNavi /> : <PermissionNavi />
        }
      </NavigationContainer>
    );
};