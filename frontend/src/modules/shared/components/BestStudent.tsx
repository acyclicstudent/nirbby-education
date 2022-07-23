import LogoMoney from "./LogoMoney";
import './sass/BestStudent.scss';

export interface BestStudentProps {
    position: number;
    name: string;
    money: number;
}
export default function BestStudent(props: BestStudentProps) {
    return(
        <div className="shared-component-best">
            <div className="nombre">
                <p>{props.position}</p>
                <p className="textname">{props.name}</p> 
            </div>
            
            <div className="moneda">
                <p><LogoMoney/></p>
                <p className="money">{props.money}</p>
            </div>
            
        </div>
    )
}