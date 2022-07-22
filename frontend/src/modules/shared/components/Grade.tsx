
import './sass/Grade.scss';

export interface GradeProps {
    subject: string;
    grade: number;
}

export default function Grade(props: GradeProps) {
    const color = props.grade >= 8 
                    ? '#00BF8B' 
                    : props.grade <= 5.9
                    ? '#FF5700'
                    : '#FFAB41';
    
    return(
        <div 
            className="shared-component-grade"
            style={
                {
                    backgroundColor: color
                }
            }>
                <p>{props.subject}</p>
                <p>{props.grade}</p>
        </div>
    )
}