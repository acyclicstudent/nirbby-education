import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthProvider, useAuth } from "../auth";
import Auth from "../shared/routes/Auth";
import AuthForm from "./components/forms/AuthForm";
import Home from "./routes/HomeStudent";
import Rewards from "./routes/Rewards";

export default function DefaultRouter() {
    const [state, authDispatchers] = useAuth('default');
    
    return (
        <AuthProvider value={authDispatchers}>
            <Switch>
                {
                    state.isAuth ? (
                        <>
                            <Route
                                exact
                                path="/app"
                                component={Home}
                                render={() => <Auth type="default" AuthForm={AuthForm} />}
                            />
                            <Route path="/app/rewards" component={Rewards} />
                        </>
                    ) : (
                        <>
                            <Route
                                exact
                                path="/app"
                                render={() => <Auth type="default" AuthForm={AuthForm} />}
                            />
                        </>
                    )
                }
            </Switch>
        </AuthProvider>
    );
}