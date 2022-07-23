import { AuthState } from "./auth-state.model";
import { Credentials } from "./credentials.model";

export interface AuthDispatchers {
    signIn: (credentials: Credentials) => Promise<LoginResult>;
    signOut: () => Promise<void>;
    getState: () => AuthState;
}

export interface LoginResult {
    success: boolean;
    error?: any;
}