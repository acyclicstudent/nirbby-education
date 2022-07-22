import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="coaches-components-forms-authform">
            {
                isLogin ? (
                    <LoginForm toggleForm={toggleForm}/>
                ) : (
                    <RegisterForm  />
                )
            }
        </div>
    );
}