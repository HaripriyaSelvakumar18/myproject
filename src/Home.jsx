import{Link,Outlet} from "react-router-dom";
function Home(){

    return(
       <div>
        <Outlet>
       <h4 className="text text-if"> home page!!! </h4>
       <Link to="register" className="ms-4">register</Link>
       <Link to="search" className="ms-4">search</Link>
       <Link to="delete" className="ms-4">delete</Link>
       <Link to="employee" className="m3-4">employee</Link>
       </Outlet>
       </div>
)
}
export default home;