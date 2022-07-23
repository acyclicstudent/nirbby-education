
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './sass/CircularBar.scss';
export interface CircularBarProps {
    width: number;
    height: number;
    value: number;
    text: string;
}
export default function CircularBar(props: CircularBarProps){
    return(
        <div className="shared-component-circularbar" style={
            {
                width: props.width,
                height: props.height
            }
        }>
            <CircularProgressbar value={props.value} text={`${props.value}%`}  styles ={
                    buildStyles({
                    textColor: '#000000',
                })
            }/>
        </div>
    )
}