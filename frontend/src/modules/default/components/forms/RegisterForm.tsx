import { useContext, useState } from "react";
import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";
import "./sass/RegisterForm.scss"
import Swal from 'sweetalert2';
import { AuthContext } from "../../../auth";
import { signUp } from "../../../auth/controllers/auth.controller";

export interface RegisterProps {
    toggleForm: () => void;
}


export default function Register(props: RegisterProps) {
    const authContext = useContext(AuthContext);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });
    
    const onChange = (event:any) => {
        const { name, value } = event.target;
        setData({
            ...data, [name]: value
        });
    }

    const register = async () => {
        try {
            // Signup
            const result = await signUp(data);
            console.log('Signup result: ', result);

            // Show message.
            await Swal.fire({
                icon: 'success',
                title: 'Se creó la cuenta exitosamente.',
                heightAuto: false,
            });

            // Auto Login
            await authContext.signIn({
                email: data.email,
                password: data.password
            })
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'No se pudo crear la cuenta',
                heightAuto: false,
                text: (err as Error).message
            });
        }
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
                    name="name"           
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
                <Button 
                    text="Crear Cuenta"  
                    onClick={register}
                />
            </div>
            <div className="login">
                <button className="underlined-button" onClick={props.toggleForm}>
                    ¿Ya tienes cuenta? Inicia Sesión
                </button>
            </div>
        </div>
    );
}