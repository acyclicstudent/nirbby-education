import { Auth } from "aws-amplify";
import { ApplicationConfig } from "../../application.config";

Auth.configure(ApplicationConfig.aws);

export { useAuth } from "./hooks/use-auth.hook";
export { default as AuthContext, AuthProvider, AuthConsumer } from './contexts/auth.context';