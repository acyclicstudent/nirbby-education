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
    'coaches': 'TITULO 1',
    'institutes': 'TITULO 2',
    'default': 'TITULO 3'
}

const AUTH_TEXTS = {
    'coaches': 'TEXTO 1',
    'institutes': 'TEXTO 2',
    'default': 'TEXTO 3'
}