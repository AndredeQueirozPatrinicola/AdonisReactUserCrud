import { UserData } from "./UserData";
import { AuthErrorMessages } from "./AuthErrorMessages";
import { UserInfos } from "./UserInfos";

export type AuthContextData = {
    authenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    login: (userData: UserData) => void;
    logout: () => void,
    authErrorMessages: AuthErrorMessages[];
    setAuthErrorMessages: (authErrorMessages: AuthErrorMessages[]) => void;
    userInfos: UserInfos
};