interface IUserInfo {
    id: string;
    email: string;
    name: string;
    tokens: {
      accessToken: string;
      refreshToken: string;
    }
}


interface IUserContext {
  isLoading: boolean;
  userInfo: IUserInfo | undefined;
  login: ( {}: IUserInfo ) => void;
  getUserInfo: () => void;
  logout: () => void;  
  permission: boolean | undefined;
  checkPermission: (granted: boolean) => void
  getPermission: () => void
}


  