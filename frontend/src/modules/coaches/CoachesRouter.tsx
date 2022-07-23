import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../shared/routes/Auth";
import AuthForm from "./components/forms/AuthForm";
import CheckStudent from "./routes/CheckStudent";
import Home from "./routes/Home";

export default function CoachesRouter() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <Switch>
            {
                isLoggedIn ? (
                    <>
                        <Route 
                            exact 
                            path="/coaches" 
                            component={CheckStudent}
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
    );
}