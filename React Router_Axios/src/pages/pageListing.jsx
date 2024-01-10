import { Outlet, Link } from "react-router-dom";

const PageListing = () => {
  return (
    <>
      <nav>
        <ul class="navigation-bar">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/setTarget">SetTarget</Link>
          </li>
          <li>
            <Link to="/AEPGovernance">AEPGovernance</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default PageListing;