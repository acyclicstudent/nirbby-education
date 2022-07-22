import { useState } from "react";
import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";
import "./sass/LoginForm.scss"

export interface LoginProps {
    toggleForm: () => void;
}

export default function LoginForm(props: LoginProps){

    const [data, setData] = useState({
        email: "",
        password: "",
    });
    
    const onChange = (event:any) => {
        const { name, value } = event.target;
        setData({
            ...data, [name]: value
        })
    }

    return(
        <div className="components-forms-login">
            <h1 className="title">Inicia Sesión</h1>
            
            <div className="login-input">
                <Input 
                    type="text"
                    placeholder="Email"
                    value={data.email}
                    onChange={onChange} 
                    name="email"           
                />
            </div>
            <div className="login-input">
                <Input 
                    type="password" 
                    placeholder="Password" 
                    value={data.password}
                    onChange={onChange}
                    name="password"
                />
            </div>
            <div className="login-pass">
            <button className="underlined-button" onClick={props.toggleForm}>
                    ¿Olvidaste tu contrasena? 
                </button>
            </div>
            <div className="login-button">
                <Button text="Iniciar Sesión"/>
            </div>
            <div className="register">
                <button className="underlined-button" onClick={props.toggleForm}>
                    ¿No tienes cuenta? Registrate
                </button>
            </div>            
        </div>
    );
}