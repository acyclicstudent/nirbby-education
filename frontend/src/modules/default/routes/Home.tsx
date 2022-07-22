import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import CircularBar from "../../shared/components/CircularBar";
import Grade from "../../shared/components/Grade";
import Menu from "../../shared/routes/Menu";
import './sass/Home.scss';

export default function Home() {
    const params = useParams<any>();//Tipado (cualquiera)
    //Aqui ponemos los datos a buscar en la query
    const GET_STRAYDOG = gql` 
    query ExampleQuery($locationId: ID!) {
      location(id: $locationId) {
        id
        name
        description
        photo
        overallRating
      }
    }
  `;
  /*const { loading, error, data } = useQuery(GET_STRAYDOG, {
    variables: {
        locationId: params.id,
        image: params.image,
        description: params.description
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    */
    return (
        <div className="app-component-home">
            <Menu/>
            <div className="app-content-container">
                <div className="app-component-buttons">
                    <Link to={"/app/subjects"} className="app-component-link1">
                        <p>Mis Materias</p>
                    </Link>
                    <Link to={"/app/mycoaches"} className="app-component-link2">
                        <p>Mis Tutores</p>
                    </Link>
                    <Link to={"/app/rewards"} className="app-component-link3">
                        <p>Mis Recompensas</p>
                    </Link>
                </div>
                <div className="app-component-progress">
                    <div className="app-component-h1">
                        <h1>Mi Progreso</h1>
                    </div>
                    <CircularBar value={70} text={"50%"} />
                    <p className="app-component-name"> Axel Adrián López Cedano</p> 
                    <Grade subject={"Matematicas"} grade={10}></Grade>
                    <Grade subject={"Biologia"} grade={7}></Grade>
                    <Grade subject={"Ciencias"} grade={5}></Grade>
                </div>
            </div>
        </div>
    );
}