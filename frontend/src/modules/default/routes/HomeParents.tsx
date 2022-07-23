import CircularBar from "../../shared/components/CircularBar";
import Grade from "../../shared/components/Grade";
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
                        <div className="bars">
                            <div className="alumno">
                                <CircularBar value={89} text={"89"} width={140} height={120} />
                                <p>Nombre de un vato</p>
                            </div>
                            <div className="alumno">
                                <CircularBar value={45} text={"45"} width={140} height={120} />
                                <p>Nombre de otro vato</p>
                            </div>
                            <div className="alumno">
                                <CircularBar value={25} text={"25"} width={140} height={120} />
                                <p>Nombre de un tercer vato</p>
                            </div>
                        </div>
                    </div>
                    <div className="state">
                        <p>Estado del estudiante</p>
                        <div className="infor">
                            <div className="graph">
                                Aqui la grafica de progreso
                            </div>
                            <div className="grades">
                                <Grade subject={"Espanol"} grade={7}/>
                                <Grade subject={"Historia"} grade={9}/>
                                <Grade subject={"Ciencias"} grade={4}/>
                                <Grade subject={"Matematicas"} grade={6}/>

                            </div>
                        </div>
                            <div className="student">
                                <button className="izr"></button>
                                <p>Estudiante tal</p>
                                <button className="der"></button>
                            </div>
                    </div>
                </div>
                <div className="coaches-menu">
                    <p> Aqui va el menu de tutores y profesores</p>
                </div>
            </div>

        </div>
    );
}