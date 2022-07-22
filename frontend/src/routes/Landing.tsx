import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <>
            <Link to="/app">Estudiantes o Padres</Link>
            <hr />
            <Link to="/coaches">Profesores y tutores</Link>
            <hr />
            <Link to="/institutes">Instituciones</Link>
        </>
    );
}