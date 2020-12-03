import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import {UserContext} from '~/Context/User';
import Loading from '~/Components/Common/Loading';
import { StatusBar } from 'react-native';
import { 
    DefaultOptions, 
    GrowModalOptions, 
    SlideOptions, 
    DefaultInputOptions, 
    DrawerOptions,
    AgencyOptions,
    CitizenOptions
} from '~/Screens/Navigation/NavigationOptions';



import Permission from '~/Screens/Permission';
import PushNotice from '~/Screens/PushNotice';
import Intro from '~/Screens/Intro';
import Main from '~/Screens/Main';

//Join
import JoinSelectModal from '~/Screens/Join/JoinSelectModal';
import JoinAnotherSelectModal from '~/Screens/Join/JoinAnotherSelectModal';
import JoinEmail from '~/Screens/Join/JoinInput/JoinEmail';
import JoinPassword from '~/Screens/Join/JoinInput/JoinPassword';
import JoinPermissionSelect from '~/Screens/Join/JoinInput/JoinPermissionSelect';
import JoinPhonePermission from '~/Screens/Join/JoinInput/JoinPhonePermission';
import CitizenSelectMdal from '~/Screens/Join/JoinInput/InputSelectModal/CitizenSelectMdal';
import AgencySelectMdal from '~/Screens/Join/JoinInput/InputSelectModal/AgencySelectMdal';

//Login
import LoginSelectModal from '~/Screens/Login/LoginSelectModal';
import LoginAnotherSelectModal from '~/Screens/Login/LoginAnotherSelectModal';
import Login from '~/Screens/Login/LoginInput/Login';

//MainDrawer
import MainDrawer from '~/Screens/Drawer/MainDrawer';

const PermissionStack = createStackNavigator();
const RootStack = createStackNavigator();
const UserStack = createStackNavigator();
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


//=== UserNavi
function UserNavi() {
    const { userInfo } = useContext<IUserContext>(UserContext);

    return (
        <UserStack.Navigator 
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: 'transparent' },
          }}        
          mode="modal"
        >

        {/* 메인  */}
            <UserStack.Screen name="MainStack" component={MainNavi} />
        

        {/* MainDrawer  */}
            <UserStack.Screen name="MainDrawer" component={MainDrawer}
                options={DrawerOptions} />
        
                  
        {/* 로그인  */}
            {/* <RootStack.Screen 
                name="LoginSelect" component={LoginSelectModal}
                options={DefaultOptions}  
            />
            <RootStack.Screen 
                name="LoginAnotherSelect" component={LoginAnotherSelectModal}                 
                options={GrowModalOptions}    
            />
            <RootStack.Screen 
                name="Login" component={Login}                 
                options={SlideOptions}    
            /> */}

        {/* 회원가입  */}
            {/* <RootStack.Screen 
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
                initialParams={{ citizenInfo: '내국인', agency: '통신사', nextFocus: '' }} 
            />            
            <RootStack.Screen 
                name="CitizenSelectMdal" component={CitizenSelectMdal}                
                options={CitizenOptions}     
            />            
            <RootStack.Screen 
                name="AgencySelectMdal" component={AgencySelectMdal}                
                options={AgencyOptions}     
            />    

            <RootStack.Screen 
                name="JoinEmail" component={JoinEmail}                
                options={SlideOptions}     
            />            
            <RootStack.Screen 
                name="JoinPassword" component={JoinPassword}                
                options={SlideOptions}     
            />             */}
        </UserStack.Navigator>
    );
};


//=== Root
function RootNavi() {
    return (
        <RootStack.Navigator 
        initialRouteName='Main'
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: 'transparent' },
          }}        
          mode="modal"
        >

        {/* 메인  */}
            <RootStack.Screen name="MainStack" component={MainNavi} />
        

        {/* MainDrawer  */}
            <RootStack.Screen name="MainDrawer" component={MainDrawer}
                options={DrawerOptions} />
        
                  
        {/* 로그인  */}
            <RootStack.Screen 
                name="LoginSelect" component={LoginSelectModal}
                options={DefaultOptions}  
            />
            <RootStack.Screen 
                name="LoginAnotherSelect" component={LoginAnotherSelectModal}                 
                options={GrowModalOptions}    
            />
            <RootStack.Screen 
                name="Login" component={Login}                 
                options={SlideOptions}    
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
                initialParams={{ citizenInfo: '내국인', agency: '통신사', nextFocus: '' }} 
            />            
            <RootStack.Screen 
                name="CitizenSelectMdal" component={CitizenSelectMdal}                
                options={CitizenOptions}     
            />            
            <RootStack.Screen 
                name="AgencySelectMdal" component={AgencySelectMdal}                
                options={AgencyOptions}     
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
    const {isLoading, permission, userInfo} = useContext<IUserContext>(UserContext);

    
    if (isLoading === false) {
        return <Loading />;
    }
    
    const naviSwitch = ()=>{
        if( !permission ){
            return <PermissionNavi />;
        }else if( userInfo ){
            return <UserNavi />
        } else {
            return <RootNavi />
        }
    }

    return (
        <NavigationContainer>
        {/* <StatusBar barStyle='dark-content' translucent={true} backgroundColor='rgba(0,0,0,0)' /> */}
        {/* {console.log("context>>222>>>>>>>",permission)} */}
        {
            naviSwitch()
        }
      </NavigationContainer>
    );
};
