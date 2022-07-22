import { useState } from "react";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="coaches-components-forms-authform">
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