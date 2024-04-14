import { UserData } from "./UserData";
import { AuthErrorMessages } from "./AuthErrorMessages";

export type AuthContextData = {
    authenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    login: (userData: UserData) => void;
    logout: () => void,
    authErrorMessages: AuthErrorMessages[];
    setAuthErrorMessages: (authErrorMessages: AuthErrorMessages[]) => void;
};