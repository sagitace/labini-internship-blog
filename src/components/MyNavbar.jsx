import React from "react";

const MyNavbar = ({ selectedMonth, setSelectedMonth }) => {
  const months = ["January", "February"];

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  return (
    <nav className="navbar navbar-expand-lg py-2 sticky-top">
      <div className="container">
        <h1>
          <a
            className="navbar-brand fw-bold fs-3 text-decoration-none"
            href="#Home"
          >
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
            {selectedMonth}
          </button>
          <ul className="dropdown-menu">
            {months.map((month) => (
              <li>
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
    </nav>
  );
};

export default MyNavbar;
