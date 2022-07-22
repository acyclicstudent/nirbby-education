import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
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
                    <Link to={"/subjects"} className="app-component-link1">
                        <p>Mis Materias</p>
                    </Link>
                    <Link to={"/mycoaches"} className="app-component-link2">
                        <p>Mis Tutores</p>
                    </Link>
                    <Link to={"/rewards"} className="app-component-link3">
                        <p>Mis Recompensas</p>
                    </Link>
                </div>
                <div className="app-component-progress">
                    
                </div>
            </div>
        </div>
    );
}