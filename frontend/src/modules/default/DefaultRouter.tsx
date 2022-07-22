import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../shared/routes/Auth";
import AuthForm from "./components/forms/AuthForm";
import Home from "./routes/Home";

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