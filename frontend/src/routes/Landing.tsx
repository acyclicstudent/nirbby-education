import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <>
            <Link to="/app">Estudiantes o Padres</Link>
            <Link to="/coaches">Profesores y tutores</Link>
            <Link to="/institutes">Instituciones</Link>
        </>
    );
}