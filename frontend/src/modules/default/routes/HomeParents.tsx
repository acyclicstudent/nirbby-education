import CircularBar from "../../shared/components/CircularBar";
import MenuParents from "../../shared/routes/MenuParents";
import "./sass/HomeParents.scss";

export default function HomeParents() {
    return (
        <div className="app-components-home-parents">
            <div className="menu">
                <MenuParents />
            </div>
            <div className="container">
                <div className="info-state">
                    <div className="progress">
                        <p>Progreso de mis estudiantes</p>
                        
                        <div className="alumno">
                            <CircularBar value={89} text={"89"} width={80} height={80}/>
                            <p>Nombre de un vato</p>
                        </div>
                        <div className="alumno">
                            <CircularBar value={45} text={"45"} width={120} height={100}/>                        
                            <p>Nombre de otro vato</p>
                        </div>
                        <div className="alumno">
                            <CircularBar value={25} text={"25"} width={40} height={60}/>
                            <p></p>
                        </div>
                    </div>
                    <div className="state">
                        
                    </div>
                </div>
                <div className="coaches-menu">

                </div>
            </div>

        </div>
    );
}