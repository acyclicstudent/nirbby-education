import MenuCoaches from "../../shared/routes/MenuCoaches";
import NoStudent from "../components/NoStudent";

export default function CheckStudent(){
    return(
        <div className="coaches-component-checkstudent">
            <MenuCoaches/>
            <NoStudent/>
        </div>
    )
}