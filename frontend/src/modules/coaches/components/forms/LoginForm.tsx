
import { useState, useEffect } from "react";

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
        </div>
    )
}