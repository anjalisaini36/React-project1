import React from "react";
const Navbar = (props) => {
  const { title, title_component1, title_component2, title_component3 } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/product">
                {title_component1}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {title_component2}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {title_component3}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
