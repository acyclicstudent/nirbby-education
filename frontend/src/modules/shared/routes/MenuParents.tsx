
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './sass/MenuParents.scss';

//const imageLogo = require("../../assets/images/logo.png");

export default function MenuParents () {
    return (
        <div className="components-ui-menu-parents">
            <div className="left">
                {/*<img src={imageLogo} alt='Boton de menú'  className="image"/>*/}
                <p>Nedu</p>
            </div>
            <div className="right">
                <Link to="/parent/subjects" className="link1"><div className="begin"><p>Materias</p></div></Link>
                <Link to="/parents/affiliates" className="link2"><div className="begin"><p>Estudiantes</p></div></Link>
                <Link to="/parents/account" className="link2"><div className="begin"><p>Cuenta</p></div></Link>
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