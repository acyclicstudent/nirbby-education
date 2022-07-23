import React from "react";
import { AuthDispatchers } from "../models/auth-dispatchers.model";

const AuthContext = React.createContext<AuthDispatchers>({} as any);

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;
export default AuthContext; 