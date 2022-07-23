import Button from '../../shared/components/Button';
import './sass/ViewStudent.scss';

export interface ViewStudentProps {
    name: string;
    email: string;
}

export default function ViewStudent(props: ViewStudentProps){
    return(
        <div className="coaches-component-viewstudent">
            <p className="name">{props.name}</p>
            <p className="email">{props.email}</p>
            <Button text={'Ver progreso'}></Button>
        </div>
    )
}