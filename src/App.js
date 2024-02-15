import React, { useState } from "react";
import Navbar from "./components/MyNavbar";
import AboutMe from "./components/AboutMe";
import January from "./components/January";
import Summary from "./components/Summary";
import February from "./components/February";

export default function App() {
  const [selectedMonth, setSelectedMonth] = useState("February");
  const [selectedDay, setSelectedDay] = useState("day1");

  return (
    <div className="App">
      <Navbar
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      <div className="container body-content mt-2">
        <div className="row">
          <div className="col-md-3">
            <AboutMe />
          </div>
          <div className="content col-md-7 p-4">
            <h2 className="fw-bold text-center">DICT-V Internship Blog</h2>
            <h5 className="fw-bold text-center border-bottom pb-4 border-secondary mx-3 sub-header mb-">
              Daily Entry
            </h5>
            <div className="content-entries">
              {selectedMonth === "January" && (
                <div className="january" id="januaryEntry">
                  <January />
                </div>
              )}
              {selectedMonth === "February" && (
                <div className="february" id="februaryEntry">
                  <February />
                </div>
              )}
            </div>
          </div>
          <div className="col-md-2">
            <Summary
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
