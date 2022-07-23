import { Link } from "react-router-dom";
import './sass/NoStudent.scss';
export default function NoStudent(){
    return(
        <div className="coaches-component-nostudent">
            <p className="coaches-component-noregister">NO TIENES NINGUN ESTUDIANTE REGISTRADO</p>
            <p className="coaches-component-startregister">Registra un estudiante para comenzar</p>
            <Link to="/register" className="coaches-component-link">
                <p>REGISTRAR ESTUDIANTE</p>
            </Link>
        </div>
    )
}