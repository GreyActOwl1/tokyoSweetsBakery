import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const NoPage = () => {
    return(
        <div>
            404 page <br/>
            <img src="https://media.gettyimages.com/photos/fail-for-preparing-food-picture-id1320952160?s=2048x2048" alt="404 page img" width={"500"} />
            <br/>            
            <Button ><Link to="/">Return home</Link></Button>
    </div>

    ) ;
  };
  
  export default NoPage;