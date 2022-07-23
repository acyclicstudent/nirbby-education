import { useState } from "react";
import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";
import "./sass/PassForm.scss"

export interface RegisterProps {
    toggleForm: () => void;
}

export default function Pass(props: RegisterProps) {
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

    return(
        <div className="components-forms-password">
            <h1 className="title">Recuperar contraseña</h1>
            <div className="pass-input">
                <Input 
                    type="text"
                    placeholder="Nombre"
                    value={data.name}
                    onChange={onChange} 
                    name="nombre"           
                />
            </div>
            <div className="pass-text">
                <p>Te enviaremos un codigo a tu correo con el codigo de verificacion necesario para recuperar tu contraseña</p>
            </div>
            <div className="pass-button">
                <Button text="Enviar codigo"/>
            </div>
            <div className="login">
                <button className="underlined-button" onClick={props.toggleForm}>
                    Regresar
                </button>
            </div>
        </div>
    );
}