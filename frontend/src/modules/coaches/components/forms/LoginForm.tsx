
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'
import CircularBar from "../../../shared/components/CircularBar";



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
            <h1>Login</h1>
            <CircularBar value={66} text="66"/>
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={['fab', 'apple']} />
            <FontAwesomeIcon icon={['fab', 'microsoft']} />
            <FontAwesomeIcon icon={['fab', 'google']} />
            <FontAwesomeIcon icon="check-square" />
        </div>
    )
}