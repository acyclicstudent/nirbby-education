import { useState } from "react";

export interface RegisterProps  {
    toggleForm: () => void;
}

export default function RegisterForm(props: RegisterProps){
    
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
            <h1>Register Coaches</h1>
        </div>
    )
}