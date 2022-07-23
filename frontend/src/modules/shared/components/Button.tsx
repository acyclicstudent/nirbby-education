import './sass/Button.scss';

export interface ButtonProps {
    text: string;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className="component-forms-button">
            {props.text}
        </button>
    );
}