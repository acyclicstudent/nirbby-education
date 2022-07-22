
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'
import CircularBar from "../../../shared/components/CircularBar";
import Input from "../../../shared/components/Input";



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
        <div> 
            <Input 
                type="password" 
                placeholder="Password" 
                value={data.password}
                onChange={onChange}
                name="password"/>
        </div>
    )
}