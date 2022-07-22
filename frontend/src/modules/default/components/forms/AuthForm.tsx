import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthForm(){
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="app-components-forms-authform">
            {
                isLogin ? (
                    <LoginForm />
                ) : (
                    <RegisterForm />
                )
            }
        </div>
    );
}