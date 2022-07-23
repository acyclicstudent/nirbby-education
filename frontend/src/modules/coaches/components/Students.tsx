import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sass/Student.scss';

export default function Student(){
    return(
        <div className="coaches-component-student">
            <p className="student">Estudiantes
                <div>
                    <FontAwesomeIcon icon="plus" />
                </div>
            </p>       
        </div>
    )
}