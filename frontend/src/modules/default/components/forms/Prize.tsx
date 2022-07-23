import './sass/Prize.scss';

export interface PrizeProps {
    date: string;
}

export default function Prize(props:PrizeProps){
    const image = '../../../../../img/laptop.jpg';
    return(
        <div className="app-component-prize">
            <p className="prize">Rifa</p>
            <div className="app-component-lap">
                <div className="app-component-image">
                    <img src={image} alt="Imagen de laptop" />
                    <p className="app-component-name">LAPTOP PARA ESTUDIAR</p> 
                    <p className="app-component-name2">Laptop con todas las caracteristicas para estudiar,etc</p> 
                    <div className="app-component-partner">
                        <p className="app-component-name3">HCL<br /></p>
                        <p className="app-component-name4">PATROCINADOR</p>
                    </div>
                    <p className="app-component-date">FECHA {props.date}</p>     
                </div>
            </div>
        </div>
    )
}