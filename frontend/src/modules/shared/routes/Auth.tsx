export interface AuthProps {
    type: 'institutes' | 'coaches' | 'default';
    AuthForm: any;
}

export default function Auth(props: AuthProps) {
    return(
        <div className="app-auth">
            <div>
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
                {/* Texto */}
                <div>
                    <h1>{AUTH_TITLES[props.type]}</h1>
                    <hr />
                    <p>{AUTH_TEXTS[props.type]}</p>
                </div>
            </div>
            {/* Div de login */}
            <props.AuthForm />
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