import './sass/ButtonToggle.scss';

export interface ButtonProps {
    text: string;
}

export default function Button(props: ButtonProps) {
    return (
        <button className="component-forms-button">
            {props.text}
        </button>
    );
}