import { Link, useHistory } from "react-router-dom";
import Button from "../modules/shared/components/Button";
import './sass/Landing.scss';   
export default function Landing() {
    const history = useHistory();
    return (
        <div className="landing-container">
            <p className="logo">Nedu</p>
            <div className="landing-item landing-parents">
                <div className="opacity">
                    <p >ESTUDIANTES O PADRES</p>
                    <div className="landing-button">
                    <Button text="VAMOS" onClick={() => history.push('/app')}></Button>
                    </div>
                </div>
            </div>
            <div className="landing-item landing-coaches">
                <div className="opacity">
                    <p>TUTOTES Y PROFESORES</p>
                    <div className="landing-button">
                    <Button text="VAMOS" onClick={() => history.push('/coaches')}></Button>
                    </div>
                </div>
            </div>
            <div className="landing-item landing-institutes">
                <div className="opacity">
                    <p>INSTITUCIONES</p>
                    <div className="landing-button">
                        <Button text="VAMOS" onClick={() => history.push('/institutes')}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}