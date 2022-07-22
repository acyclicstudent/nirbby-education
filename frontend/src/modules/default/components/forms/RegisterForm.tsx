import { useState } from "react";
import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";

export interface RegisterProps {
    toggleForm: () => void;
}


export default function Register(props: RegisterProps) {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    
    
    const onChange = (event:any) => {
        const { name, value } = event.target;
        setData({
            ...data, [name]: value
        })
    }

    return (
        <div className="components-forms-register">
            <h1 className="title">Registrate</h1>
            <div className="register-input">
                <Input 
                    type="text"
                    placeholder="Nombre"
                    value={data.name}
                    onChange={onChange} 
                    name="nombre"           
                />
            </div>
            <div className="register-input">
                <Input 
                    type="text"
                    placeholder="Email"
                    value={data.email}
                    onChange={onChange} 
                    name="email"           
                />
            </div>
            <div className="register-input">
                <Input 
                    type="password" 
                    placeholder="Password" 
                    value={data.password}
                    onChange={onChange}
                    name="password"
                />
            </div>
            <div className="register-button">
                <Button text="Crear Cuenta"/>
            </div>
            <div className="login">
                <button className="underlined-button" onClick={props.toggleForm}>
                    ¿Ya tienes cuenta? Inicia Sesión
                </button>
            </div>
        </div>
    );
}