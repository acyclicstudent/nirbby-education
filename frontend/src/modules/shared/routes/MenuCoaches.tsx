
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './sass/MenuCoaches.scss';

//const imageLogo = require("../../assets/images/logo.png");

export default function MenuCoaches () {
    return (
        <div className="components-ui-menu">
            <div className="left">
                {/*<img src={imageLogo} alt='Boton de menú'  className="image"/>*/}
                <p>Nedu</p>
            </div>
            <div className="right">
                <Link to="/coach/students" className="link1"><div className="begin"><p>Estudiantes</p></div></Link>
                <Link to="/coach/account" className="link2"><div className="begin"><p>Cuenta</p></div></Link>
                <div className="icon">
                    {/*<p><FontAwesomeIcon icon="bell" /></p>*/}
                    <p><FontAwesomeIcon icon="right-from-bracket"/></p>
                </div>
                <div className="icon2">
                </div>
            </div>

        </div>
    );
}