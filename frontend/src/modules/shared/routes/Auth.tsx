import "./sass/Auth.scss"

export interface AuthProps {
    type: 'institutes' | 'coaches' | 'default';
    AuthForm: any;
}

export default function Auth(props: AuthProps) {
    const image = props.type === 'coaches' 
                    ? 'background-green.png'
                    : props.type === 'institutes'
                    ? 'background-yellow.png'
                    : 'background-blue.jpg';
    return (
        <div className="app-auth">
            {/* Parte izquierda */}
            <div 
                className="left"
                style={
                    {
                        backgroundImage: `url("/img/${image}")`
                    }
                }
            >
                <div className="opacity">
                    {/* Logo */}
                    <div className="logo-container">
                        <p className="logo">Nedu</p>
                        {
                            props.type === 'institutes' ? (
                                <p className="type">For Institutes</p>
                            ) : props.type === 'coaches' ? (
                                <p className="type">For Coaches</p>
                            ) : null
                        }
                    </div>
                    <div className="description">
                        <p className="description1">{AUTH_TITLES[props.type]}</p>
                        <hr />
                        <p className="text1">{AUTH_TEXTS[props.type]}</p>
                    </div>
                </div>
            </div>
            {/* Div de login */}
            <div className="right">
                <props.AuthForm />
            </div>
        </div>
    )
}

const AUTH_TITLES = {
    'coaches': 'CERTIFICATE Y APOYA',
    'institutes': 'MANTEN EL CONTROL',
    'default': 'APRENDE Y MEJORA'
}

const AUTH_TEXTS = {
    'coaches': 'Accede a materiales y cursos de certificacion, capacitate y apoya a quienes mas lo necesitan ',
    'institutes': 'Con Nedu for institutes puedes decidir que planes de estudio, cursos, profesores y tutores son los indicados para tu institucion educativa',
    'default': 'Con Nedu puedes acceder a recursos didacticos, ejercicios, evaluaciones y tutores certificados que te ayudaran personalmente'
}