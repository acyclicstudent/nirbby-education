export interface AuthState {
    isLoading: boolean;
    isAuth: boolean;
    isStudent?: boolean;
    isParent?: boolean;
    isCoach?: boolean;
    isInstitute?: boolean;
    name?: string;
    email?: string;
}