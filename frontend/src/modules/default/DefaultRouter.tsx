import { Route, Switch } from "react-router-dom";
import { AuthProvider, useAuth } from "../auth";
import Auth from "../shared/routes/Auth";
import AuthForm from "./components/forms/AuthForm";
import Rewards from "./routes/Rewards";
import HomeParents from "./routes/HomeParents";
import HomeStudent from "./routes/HomeStudent";


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
                                component={HomeStudent}
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