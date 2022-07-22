
import './sass/Menu.scss';

const imageLogo = require("../../assets/images/logo.png");

export default function Menu () {
    return (
        <div className="components-ui-menu">
            <div className="left">
                <img src={imageLogo} alt='Boton de menú'  className="image"/>
                <p>Mascotas pendejas</p>
            </div>
            <div className="right">
                <div className="begin"><p>Inicio</p></div>
                <div className="upload"><p>Subir mascota</p></div>
                <div className='logout'><p>LogOut</p></div>
            </div>
        </div>
    );
}