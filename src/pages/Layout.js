import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>
            <Link to="/Cv">Cv</Link>
          </li>
          <li>
            <Link to="/Om">Om mig</Link>
          </li>
          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    <Outlet />
    </>
  );
  };
  export default Layout;