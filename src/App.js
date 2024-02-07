import React from "react";
import Navbar from "./components/MyNavbar";
import AboutMe from "./components/AboutMe";
import January from "./components/January";
import Summary from "./components/Summary";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container body-content mt-5">
        <div className="row">
          <div className="col-md-3">
            <AboutMe />
          </div>
          <div className="content col-md-7 p-4">
            <h2 class="fw-bold text-center">On-The-Job-Training Blog</h2>
            <h5 class="fw-bold text-center border-bottom pb-4 border-secondary mx-3 sub-header mb-">
              Daily Entry
            </h5>
            <January />
          </div>
          <div className="col-md-2">
            <Summary />
          </div>
        </div>
      </div>
    </div>
  );
}
