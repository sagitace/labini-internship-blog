import React from "react";

const Summary = () => {
  return (
    <div className="summary p-4 d-none d-md-block">
      <div class="fw-bold sub-header mb-1 summary-navigation">Navigation</div>
      <div class="entrieslabel">
        <a href="#januaryday2" class="day2 january fs-6">
          Day 2
        </a>{" "}
        <br />
        <a href="#januaryday1" class="day1 january fs-6">
          Day 1
        </a>
      </div>
    </div>
  );
};

export default Summary;
