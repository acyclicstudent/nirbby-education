import CircularBar from "../../shared/components/CircularBar";
import MenuParents from "../../shared/routes/MenuParents";

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
                        <div>
                            <CircularBar value={89} text={"89"}/>
                            <p></p>
                        </div>
                        <div>
                            <CircularBar value={45} text={"45"}/>                        
                        </div>
                        <div>
                            <CircularBar value={25} text={"25"}/>
                        </div>
                    </div>
                    <div className="state"></div>
                </div>
                <div className="coaches-menu">

                </div>
            </div>

        </div>
    );
}