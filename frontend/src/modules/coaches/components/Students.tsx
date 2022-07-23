import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddStudent from '../../shared/components/forms/AddStudent';
import ViewStudents from '../../shared/components/ViewStudents';
import './sass/Student.scss';
import ViewStudent from './ViewStudent';

export default function Student(){
    return(
        <div className="coaches-component-student">
            <div className="coaches-component-right">
                <div className="coaches-content-liststudent">
                    <p className="student">Estudiantes <FontAwesomeIcon icon="plus" /></p> 
                </div>
                <div className="coaches-content-checkstudent">
                    <ViewStudents name={'Brian Axel Avila Arvizu'} email={'axel@nirbby.com'}/>
                    <ViewStudents name={'Axel Adrián López Cedano'} email={'axel.adrian02@gmail.com'}/>
                    <ViewStudents name={'Daniel Aurelio Muñoz González'} email={'raizeremi@gmail.com'}/>
                    <ViewStudents name={'Eduardo Hernández Vergara'} email={'ehv@gmail.com'}/>
                    <ViewStudents name={'José Ángel Rojas Cruz'} email={'rojasa@gmail.com'}/>
                </div> 
            </div>
            <div className="coaches-component-left">
                {/*<AddStudent/>*/}
                <ViewStudent name={'Axel Avila'} email={'axel@nirby.com'}/>
            </div>  
        </div>
    )
}