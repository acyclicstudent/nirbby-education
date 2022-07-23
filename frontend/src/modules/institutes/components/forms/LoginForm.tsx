import { useState } from "react";
import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";
import "./sass/LoginForm.scss"

export interface LoginProps {
    toggleForm: () => void;
}

export default function LoginForm(props: LoginProps) {
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
            {/*Aqui va el boton que cambia uno y otro*/}

            {/* Todo esto se debe hacer un nuevo componente y aplicar un nuevo if como el que esta en el authform*/}
            <h1 className="title">Iniciar Sesión</h1>
            
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
                        Olvide mi contraseña
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
    )
}