import { Link } from 'react-router-dom';
import './sass/ViewStudent.scss';
export interface ViewStudentsProps {
    name: string;
    email: string;
}

export default function ViewStudents(props: ViewStudentsProps){
    return(
        <div className="shared-component-viewstudent">
            <p className="name">{props.name}</p>
            <p className="email">{props.email}</p>
        </div>
    )
}