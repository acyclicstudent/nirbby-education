import './sass/NoPrize.scss';

export default function NoPrize(){
    return(
        <div className="app-component-noprize">
            <p className="prize">Rifa</p>
            <div className="app-component-nolap">
                <p className="app-component-name">POR EL MOMENTO NO HAY RIFA</p>
                <p className="app-component-posibility">Sigue acumulando puntos para aumentar tus posibilidades de ganar</p>
            </div>
        </div>
    )
}