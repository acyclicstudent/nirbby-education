import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthProvider, useAuth } from "../auth";
import Auth from "../shared/routes/Auth";
import AuthForm from "./components/forms/AuthForm";
import CheckStudent from "./routes/CheckStudent";
import Home from "./routes/Home";

export default function CoachesRouter() {
    const [state, authDispatchers] = useAuth('institutes');
    console.log('State: ', state);

    if (state.isLoading) return <p>Cargando....</p>;

    return (
        <AuthProvider value={authDispatchers}>
            <Switch>
                {
                    state.isAuth ? (
                        <>
                            <Route 
                                exact 
                                path="/coaches" 
                                component={Home}
                                render={() =>  <Auth type="coaches" AuthForm={AuthForm} />} 
                                />
                        </>
                        ) : (
                            <>
                                <Route 
                                exact 
                                path="/coaches" 
                                render={() =>  <Auth type="coaches" AuthForm={AuthForm} />} 
                                />
                            </>
                        )
                }
            </Switch>
        </AuthProvider>
    );
}