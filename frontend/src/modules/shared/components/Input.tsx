import './sass/Input.scss';

export interface InputProps {
    type : string;
    name : string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
    return (
        <input className="component-forms-input"
            type={props.type} 
            name={props.name}
            placeholder={props.placeholder} 
            value={props.value} 
            onChange={props.onChange}
        />
    );
}