import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const defaultContext: IUserContext = {
  isLoading: false,
  userInfo: undefined,
  login: (email: string, password: string) => {},
  getUserInfo: () => {},
  logout: () => {},
  checkPermission: (userCheck: boolean) => {},
  permission: undefined,
  getPermission: () => {}
};

const UserContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
};

const UserContextProvider = ({children}: Props) => {
    const [permission, setPermission] = useState<boolean | undefined>(undefined);
    const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getPermission = () => {
        AsyncStorage.getItem('checkPermission').then( value => {
            if ( value ) {
                setPermission(true);
            }
            setIsLoading(true);
        }).catch( () => {
            setPermission(undefined);
            setIsLoading(true);
        });
    };

    const checkPermission = (userCheck: boolean) => {
        AsyncStorage.setItem('checkPermission', 'check').then( () => { 
            setPermission(true);
         } );
        setIsLoading(true);
    };

    const login = (email: string, password: string): void => {
        //서버로직 추가
        AsyncStorage.setItem('token', 'save your token').then(() => {
        setUserInfo({
            email: 'dev.yakuza@gamil.com',
            password: 'pass~!'
        });
        // setIsLoading(true);
        });
    };

    const getUserInfo = (): void => {
        AsyncStorage.getItem('token').then( value => {
            if (value) {
            setUserInfo({
                email: 'jsh@gamil.com',
                password: 'pass~!'
            });
            }
            // setIsLoading(true);
        })
        .catch(() => {
            setUserInfo(undefined);
            // setIsLoading(true);
        });
    };

    const logout = (): void => {
        AsyncStorage.removeItem('token');
        setUserInfo(undefined);
    };

    useEffect(() => {
        getPermission();
        getUserInfo();
    }, []);

    return (
        <UserContext.Provider
        value={{
            isLoading,
            userInfo,
            login,
            getUserInfo,
            logout,
            getPermission,
            checkPermission,
            permission
        }}>
        {children}
        </UserContext.Provider>
    );
};

export {UserContextProvider, UserContext};
