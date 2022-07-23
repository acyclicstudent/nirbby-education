import BestStudent from "../../shared/components/BestStudent";
import Menu from "../../shared/routes/Menu";
import NoPrize from "../components/forms/NoPrize";
import Prize from "../components/forms/Prize";
import './sass/Rewards.scss';
export default function Rewards(){
    return(
        <div className="app-component-rewards">
            <Menu/>
            <div className="app-content-container">
                <div className="app-content-container-right">
                <p className="cuadrohonor">Cuadro de Honor</p>
                    <div className="app-content-honor">
                        <BestStudent position={1} name={"Axel Avila"} money={123}/>
                        <BestStudent position={1} name={"Axel Avila"} money={123}/>
                        <BestStudent position={1} name={"Axel Avila"} money={123}/>
                        <BestStudent position={1} name={"Axel Avila"} money={123}/>
                        <BestStudent position={1} name={"Axel Avila"} money={123}/>
                        <BestStudent position={1} name={"Axel Avila"} money={123}/>
                        <BestStudent position={1} name={"Axel Avila"} money={123}/>
                        <BestStudent position={1} name={"Axel Avila"} money={123}/>
                        <BestStudent position={1} name={"Axel Avila"} money={123}/>
                    </div> 
                </div>
                <div className="app-content-price">
                    {/*<Prize date={"25/07/2022"}/>*/}
                    <NoPrize/>
                </div>  
            </div>
            
        </div>
    )
}