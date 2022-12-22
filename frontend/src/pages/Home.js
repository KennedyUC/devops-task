import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Store } from "../store/contexts/AppContext";
import { sayHello_a } from "../store/actions/appActions";
import Logout from "./Logout";
import { Button } from "react-bootstrap";
// import Navbar from "../../src/components/general/navbar";
const Home = () => {
  const { greet, dispatch, changeTheme, theme } = Store();

  //the useState to show modal for logout screen
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    sayHello_a(dispatch);
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <h1>Home Page</h1>
      <h1>{greet}</h1>

      <button className="btn" onClick={changeTheme}>
        change theme
      </button>

      <span>&nbsp;</span>

      <Link className="btn" to="/example">
        Example page
      </Link>

      {/* logout button begins */}
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Logout
        </Button>

        <Logout show={modalShow} onHide={() => setModalShow(false)} />
      </>
      {/* logout button ends  */}

      <h4 style={{ marginTop: "30px" }}>Theme is {theme ? "light" : "dark"}</h4>

      <div>
        <br />
        <h3>Other Links</h3>
        <Link className="btn" to="/dashboard">
          Dashboard
        </Link>
        <Link className="btn" to="/docs">
          Docs
        </Link>
        <Link className="btn" to="/docs/usage">
          Usage
        </Link>
        <Link className="btn" to="/docs/somethingelse">
          Something Else
        </Link>
        {/* NOTE this is temporary */}
        <Link className="btn" to="/faq">
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default Home;
