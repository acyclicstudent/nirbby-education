import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../shared/routes/Auth";
import AuthForm from "./components/forms/AuthForm";
import Home from "./routes/Home";

export default function CoachesRouter() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Switch>
            {
                isLoggedIn ? (
                    <>
                        <Route
                            exact
                            path="/institutes"
                            component={Home}
                            render={() => <Auth type="institutes" AuthForm={AuthForm} />}
                        />
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