import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const toggleForm = () =>setIsLogin(!isLogin);
    return (
        <div className="institutes-components-forms-authform">
            {
                isLogin ? (
                    <LoginForm toggleForm={toggleForm} />
                ) : (
                    <RegisterForm toggleForm={toggleForm} />
                )
            }
        </div>
    );
}