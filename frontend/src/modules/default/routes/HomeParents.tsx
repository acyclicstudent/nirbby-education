import CircularBar from "../../shared/components/CircularBar";
import Grade from "../../shared/components/Grade";
import MenuParents from "../../shared/routes/MenuParents";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
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
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                        <PolarGrid />
                                        <PolarAngleAxis dataKey="subject" />
                                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                        <Legend />
                                    </RadarChart>
                                </ResponsiveContainer>
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


const data = [
    {
        subject: 'Math',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Chinese',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'English',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Geography',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Physics',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'History',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];