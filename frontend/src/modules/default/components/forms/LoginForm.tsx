import { useContext, useState } from "react";
import { AuthContext } from "../../../auth";
import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";
import Swal from 'sweetalert2';
import "./sass/LoginForm.scss"

export interface LoginProps {
    toggleForm: () => void;
}

export default function LoginForm(props: LoginProps){
    const authContext = useContext(AuthContext);

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

    const login = async () => {
        try {
            await authContext.signIn({
                email: data.email,
                password: data.password
            })
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'No se pudo iniciar la sesión',
                heightAuto: false,
                text: (err as Error).message
            });
        }
    }

    return(
        <div className="components-forms-login">
            {/*Aqui va el boton que cambia uno y otro*/}

            {/* Todo esto se debe hacer un nuevo componente y aplicar un nuevo if como el que esta en el authform*/}
            <p className="title">Iniciar Sesión</p>
            
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
                <Button onClick={login} text="Iniciar Sesión"/>
            </div>
            <div className="register">
                <button className="underlined-button" onClick={props.toggleForm}>
                    ¿No tienes cuenta? Registrate
                </button>
            </div>            
        </div>
    );
}