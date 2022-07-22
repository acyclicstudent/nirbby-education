import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AuthForm from "../coaches/components/forms/AuthForm";
import Auth from "../shared/routes/Auth";
import Home from "./routes/Home";

export default function InstitutesRouter() {
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
                            render={() =>  <Auth type="institutes" AuthForm={AuthForm} />} 
                        />
                    </>
                ) : (
                    <>
                        <Route 
                            exact 
                            path="/institutes" 
                            render={() =>  <Auth type="institutes" AuthForm={AuthForm} />} 
                        />
                    </>
                )
            }
        </Switch>
    );
}