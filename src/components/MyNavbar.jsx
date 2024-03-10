import React from "react";

const MyNavbar = ({ selectedMonth, setSelectedMonth }) => {
  const months = ["January", "February", "March"];

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  return (
    <nav className="navbar navbar-expand-lg py-2 sticky-top">
      <div className="container">
        <h1 className="navbar-brand fw-bold fs-3">Aaron.</h1>

        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center m-2">
            <div className="lastPost">
              <span className="fw-normal">Last Post:</span>{" "}
              <span className="fw-bold">Day 28 - March 08, 2024</span>
            </div>
          </div>

          <div className="dropdown" id="monthDropdown">
            <button
              className="btn myDropdown dropdown-toggle fw-bold"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedMonth}
            </button>
            <ul className="dropdown-menu">
              {months.map((month) => (
                <li key={month}>
                  <button
                    className="dropdown-item"
                    onClick={() => handleMonthChange(month)}
                  >
                    {month}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
