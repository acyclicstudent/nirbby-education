import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../shared/routes/Auth";

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
                            render={() =>  <Auth type="institutes" />} 
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