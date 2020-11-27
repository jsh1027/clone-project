interface IUserInfo {
    email: string;
    password: string;
}
  
interface IUserContext {
  isLoading: boolean;
  userInfo: IUserInfo | undefined;
  login: (email: string, password: string) => void;
  getUserInfo: () => void;
  logout: () => void;  
  permission: boolean | undefined;
  checkPermission: (granted: boolean) => void
  getPermission: () => void
}


  