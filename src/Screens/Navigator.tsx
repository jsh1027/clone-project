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

const PermissionStack = createStackNavigator();
const RootStack = createStackNavigator();

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
function RootNavi() {
    return (
        <RootStack.Navigator 
            headerMode="none"
            initialRouteName="Main"
        >
            <RootStack.Screen name="Main" component={Main} />            
            <RootStack.Screen name="Intro" component={Intro} />            
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