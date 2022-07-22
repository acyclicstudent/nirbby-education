
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './sass/CircularBar.scss';
export interface CircularBarProps {
    value: number;
    text: string;
}
export default function CircularBar(props: CircularBarProps){
    return(
        <div className="shared-component-circularbar">
            <CircularProgressbar value={props.value} text={`${props.value}%`} />
        </div>
    )
}