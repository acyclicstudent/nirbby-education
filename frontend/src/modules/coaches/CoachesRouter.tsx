import Auth from "../shared/routes/Auth";
import AuthForm from "./components/forms/AuthForm";

export default function CoachesRouter() {
    return (
        <Switch>
            <Route 
              exact 
              path="/app" 
              render={() =>  <Auth type="coaches" AuthForm={AuthForm} />} 
            />
        </Switch>
    );
}