import React from "react";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-2 sticky-top">
      <div className="container">
        <h1>
          <a className="navbar-brand fw-bold fs-3" href="#Home">
            Aaron.
          </a>
        </h1>

        <div className="dropdown" id="monthDropdown">
          <button
            className="btn myDropdown dropdown-toggle fw-bold"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            January
          </button>
          <ul className="dropdown-menu"></ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
