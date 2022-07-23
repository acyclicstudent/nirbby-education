import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import './sass/AddStudent.scss';

export default function AddStudent(){
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        repassword: "",
    });

    const onChange = (event:any) => {
        const { name, value } = event.target;
        setData({
            ...data, [name]: value
        })
    }
    
    return(
        <div className="coaches-component-addstudent">
            <div className="student">
                <p>Agregar Estudiante</p>
            </div>
            <div className="addstudent-input">
                <Input 
                    type="text"
                    placeholder="Nombre"
                    value={data.name}
                    onChange={onChange} 
                    name="name"           
                />
            </div>
            <div className="addstudent-input">
                <Input 
                    type="text"
                    placeholder="Email"
                    value={data.email}
                    onChange={onChange} 
                    name="email"           
                />
            </div>
            <div className="addstudent-input">
                <Input 
                    type="password"
                    placeholder="Contraseña"
                    value={data.password}
                    onChange={onChange} 
                    name="password"           
                />
            </div>
            <div className="addstudent-input">
                <Input 
                    type="text"
                    placeholder="Repetir Contraseña"
                    value={data.repassword}
                    onChange={onChange} 
                    name="repassword"           
                />
            </div>
            <div className="addstudent-button">
                <Button text={"CREAR ESTUDIANTE"}></Button>
            </div>
        </div>
    )
}