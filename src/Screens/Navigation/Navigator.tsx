import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import {UserContext} from '~/Context/User';
import Loading from '~/Components/Common/Loading';
import { StatusBar } from 'react-native';
import { DefaultOptions, GrowModalOptions, SlideOptions, DefaultInputOptions } from '~/Screens/Navigation/NavigationOptions';



import Permission from '~/Screens/Permission';
import PushNotice from '~/Screens/PushNotice';
import Intro from '~/Screens/Intro';
import Main from '~/Screens/Main';
import TestBottomSheet from '~/LoginTest/TestBottomSheet';
import TestAnotherBtnsBottom from '~/LoginTest/TestAnotherBtnsBottom';

import JoinSelectModal from '~/Screens/Join/JoinSelectModal';
import JoinAnotherSelectModal from '~/Screens/Join/JoinAnotherSelectModal';
import JoinEmail from '~/Screens/Join/JoinInput/JoinEmail';
import JoinPassword from '~/Screens/Join/JoinInput/JoinPassword';
import JoinPermissionSelect from '~/Screens/Join/JoinInput/JoinPermissionSelect';
import JoinPhonePermission from '~/Screens/Join/JoinInput/JoinPhonePermission';

//Login
import LoginSelectModal from '~/Screens/Login/LoginSelectModal';
import LoginAnotherSelectModal from '~/Screens/Login/LoginAnotherSelectModal';

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
          }}        
          mode="modal"
        >

        {/* 메인  */}
            <RootStack.Screen name="MainStack" component={MainNavi} />

                  
        {/* 로그인  */}
            <RootStack.Screen 
                name="LoginSelect" component={LoginSelectModal}
                options={DefaultOptions}  
            />
            <RootStack.Screen 
                name="LoginAnotherSelect" component={LoginAnotherSelectModal}                 
                options={GrowModalOptions}    
            />

        {/* 회원가입  */}
            <RootStack.Screen 
                name="JoinSelect" component={JoinSelectModal}
                options={DefaultOptions}  
            />
            <RootStack.Screen 
                name="JoinAnotherSelect" component={JoinAnotherSelectModal}                 
                options={GrowModalOptions}    
            />            
            <RootStack.Screen 
                name="JoinPermissionSelect" component={JoinPermissionSelect}                
                options={SlideOptions}     
            />            
            <RootStack.Screen 
                name="JoinPhonePermission" component={JoinPhonePermission}                
                options={SlideOptions}     
            />            
            <RootStack.Screen 
                name="JoinEmail" component={JoinEmail}                
                options={SlideOptions}     
            />            
            <RootStack.Screen 
                name="JoinPassword" component={JoinPassword}                
                options={SlideOptions}     
            />            
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
