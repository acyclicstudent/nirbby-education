import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../shared/routes/Auth";
import AuthForm from "./components/forms/AuthForm";
import HomeStudent from "./routes/HomeStudent";
import Rewards from "./routes/Rewards";
import HomeParents from "./routes/HomeParents";

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
                            component={HomeParents}
                            render={() => <Auth type="institutes" AuthForm={AuthForm} />}
                        />
                        <Route path="/app/HomeParents" component={Rewards} />
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