import { Auth } from "aws-amplify";
import { Credentials } from "../models/credentials.model";
import { NewUser } from "../models/new-user.model";
import { v4 as uuid } from 'uuid';

export const signUp = async (newUser: NewUser) => {
    await Auth.signUp({
        username: uuid(),
        password: newUser.password,
        attributes: {
            name: newUser.name,
            email: newUser.email
        },
    });

    return {success: true};
}

export const confirmSignUp = async (usernameOrEmail: string, code: string) => {
    try {
        const result = await Auth.confirmSignUp(usernameOrEmail, code);
        console.log(result);
        
        return {success: result === 'SUCCESS', error: new Error('unknown') };
    } catch (error) {
        console.log(error);
        return { success: false, error: error as Error };
    }
}

export const signOut = async () => {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log(error);
    }
}

export const signIn = async (credentials: Credentials) => {
    try {
        const result = await Auth.signIn({
            username: credentials.email,
            password: credentials.password
        });

        console.log('Sign In Result: ',result);
    } catch (error) {
        console.log('Sign In Error: ', error);
    }
}

export const sendCode = async (username: string) => {
    try {
        await Auth.resendSignUp(username);
        return {success: true};
    } catch (error) {
        return { success: false, error: error as Error };
    }
}

export const forgotPassword = async (username: string) => {
    try {
        const result = await Auth.forgotPassword(username);
        return {success: true, data: result.CodeDeliveryDetails};
    } catch (error) {
        return { success: false, error: error as Error };
    }
}

export const forgotPasswordSubmit = async (username: string, code: string, password: string) => {
    try {
        await Auth.forgotPasswordSubmit(username, code, password);
        return {success: true};
    } catch (error) {
        return { success: false, error: error as Error };
    }
}

export const changePassword = async (oldPassword: string, newPassword: string) => {
    try {
        console.log(oldPassword, newPassword);
        
        const result = await Auth.currentAuthenticatedUser()
        .then(user => {
            return Auth.changePassword(user, oldPassword, newPassword);
        })

        console.log(result);
        return {success: true};
    } catch (error) {
        console.log(error);
        return { success: false, error: error as Error };
    }
}

export const getUserData = async () => {
    try {
        const {attributes, username} = await Auth.currentUserInfo();
        return {
            email: attributes.email,
            username
        }
    } catch (error) {
        console.log(error);
    }
}