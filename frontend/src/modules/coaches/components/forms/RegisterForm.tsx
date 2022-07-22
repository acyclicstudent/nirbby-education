import { useState } from "react";

export default function RegisterForm(){
    
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
        <div>
            <h1>Register</h1>
        </div>
    )
}