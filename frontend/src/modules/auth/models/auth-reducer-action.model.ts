export interface AuthReducerAction {
    type: 'SIGN_IN' | 'SIGN_OUT' | 'LOADING';
    isStudent?: boolean;
    isParent?: boolean;
    isCoach?: boolean;
    isInstitute?: boolean;
    name?: string;
    email?: string;
}