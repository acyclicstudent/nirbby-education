import { Auth } from "aws-amplify";
import { useCallback, useEffect, useMemo, useReducer } from "react"
import { useHistory } from "react-router-dom";
import { AuthDispatchers } from "../models/auth-dispatchers.model";
import { AuthState } from "../models/auth-state.model";
import { Credentials } from "../models/credentials.model";
import { authReducer } from "../reducers/auth.reducer";
import { useApolloClient } from '@apollo/react-hooks';

export const useAuth = (type: string): [AuthState, AuthDispatchers] => {
    const history = useHistory();
    const client = useApolloClient();
    const [authState, dispatch] = useReducer(
        authReducer,
        {
            isLoading: true,
            isAuth: false
        }
    );

    const replaceWithSignout = useCallback(
        async (path: string) => {
            console.log('Redirect...');
            await client.cache.reset();
            await Auth.signOut();
            history.replace(path);
            return { success: false };
        },
        [history, client.cache]
    );

    const authDispatchers = useMemo(
        () => ({
            signIn: async (values: Credentials) => {
                try {
                    const loginResult = await Auth.signIn(values.email, values.password);
                    const groups = loginResult.signInUserSession.idToken.payload["cognito:groups"] || [];
                    console.log('Login result: ', loginResult);
                    const isStudent = !groups.length;
                    const isInstitute = groups.includes('institutes')
                    const isCoach = groups.includes('coaches')
                    const isParent = groups.includes('parents')
                    const isParentOrStudent = isParent || isStudent;

                    console.log('Signing in: ', isParent, isParentOrStudent);
                    // Si el usuario está accediendo en una pantalla que no le pertenece, lo redireccionamos.
                    if (type === 'institutes' && !isInstitute) return replaceWithSignout('/institutes'); 
                    if (type === 'coaches' && !isCoach) return replaceWithSignout('/coaches'); 
                    if (type === 'default' && !isParentOrStudent) return replaceWithSignout('/app'); 

                    console.log('Dispatching...')
                    dispatch({ 
                        type: "SIGN_IN",
                        isCoach,
                        isInstitute,
                        isParent,
                        isStudent
                    });

                    return { success: true, }
                } catch (err) {
                    return { success: false, error: err };
                }
            },
            signOut: async () => {
                try {
                    dispatch({ type: "LOADING" } as any);
                    await client.cache.reset();
                    await Auth.signOut();
                    dispatch({ type: "SIGN_OUT" } as any);
                    history.replace(type === 'default' ? '/app' : type === 'institutes' ? '/institutes' : '/coaches');
                } catch (err) {
                    console.log(err);
                    localStorage.clear();
                    dispatch({ type: "SIGN_OUT" } as any);
                    history.replace(type === 'default' ? '/app' : type === 'institutes' ? '/institutes' : '/coaches');
                }
            },
            getState() {
                return authState;
            }
        }),
        [history, client.cache, authState, type, replaceWithSignout]
    );

    useEffect(
        () => {
            const verifyToken = async () => {
                try {
                    const credentials = await Auth.currentSession();
                    const attributes = await Auth.currentUserInfo();
                    
                    if (Object.keys(attributes).length === 0)
                        throw new Error('Unauthenticated');

                    const groups = credentials
                        .getIdToken()
                        .payload['cognito:groups'] || [];

                     // Si el usuario está accediendo en una pantalla que no le pertenece, lo redireccionamos.
                    const isStudent = !groups.length;
                    const isInstitute = groups.includes('institutes')
                    const isCoach = groups.includes('coaches')
                    const isParent = groups.includes('parents')
                    const isParentOrStudent = isParent || isStudent;
                    
                    if (type === 'institutes' && !isInstitute) return replaceWithSignout('/institutes'); 
                    if (type === 'coaches' && !isCoach) return replaceWithSignout('/coaches'); 
                    if (type === 'default' && !isParentOrStudent) return replaceWithSignout('/app'); 

                    dispatch({ 
                        type: "SIGN_IN",
                        isCoach,
                        isInstitute,
                        isParent,
                        isStudent
                    });
                } catch (err) {
                    console.error(err);
                    history.replace(type === 'default' ? '/app' : type === 'institutes' ? '/institutes' : '/coaches');
                    dispatch({ type: "SIGN_OUT" } as any)
                }
            }

            verifyToken();
        },
        []
    );

    return [authState, authDispatchers];
}