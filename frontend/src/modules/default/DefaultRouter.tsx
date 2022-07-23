import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../shared/routes/Auth";
import AuthForm from "./components/forms/AuthForm";
import Home from "./routes/HomeStudent";
import Rewards from "./routes/Rewards";

export default function DefaultRouter() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <Switch>
            {
                isLoggedIn ? (
                    <>
                        <Route
                            exact
                            path="/app"
                            component={Home}
                            render={() => <Auth type="institutes" AuthForm={AuthForm} />}
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
    );
}