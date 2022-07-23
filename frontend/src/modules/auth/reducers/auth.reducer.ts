import { AuthReducerAction } from "../models/auth-reducer-action.model";
import { AuthState } from "../models/auth-state.model";

export const authReducer: React.Reducer<AuthState, AuthReducerAction> = (prev, {type, ...action}) => {
    switch (type) {
        case 'SIGN_IN':
            return {
                ...action,
                isAuth: true,
                isLoading: false,
            }
        case 'SIGN_OUT':
            return {
                isLoading: false,
                isAuth: false,
            }
        case 'LOADING':
            return {
                ...prev,
                isLoading: true,
                isAdmin: false,
            }
        default:
            return prev;
    }
}