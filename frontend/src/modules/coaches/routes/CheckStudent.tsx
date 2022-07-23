import MenuCoaches from "../../shared/routes/MenuCoaches";
import NoStudent from "../components/NoStudent";
import Students from "../components/Students";

export default function CheckStudent(){
    return(
        <div className="coaches-component-checkstudent">
            <MenuCoaches/>
            {/*<NoStudent/>*/}
            <Students/>
        </div>
    )
}