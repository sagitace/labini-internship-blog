import React from "react";

const Summary = ({
  selectedDay,
  setSelectedDay,
  selectedMonth,
  setSelectedMonth,
}) => {
  const monthData = [
    { name: "January", startDay: 1, endDay: 2 },
    { name: "February", startDay: 3, endDay: 18 },
  ];

  const getCurrentMonthIndex = () => {
    return monthData.findIndex((month) => month.name === selectedMonth);
  };

  const handlePrevClick = () => {
    const currentMonthIndex = getCurrentMonthIndex();
    if (currentMonthIndex > 0) {
      const prevMonth = monthData[currentMonthIndex - 1];
      setSelectedMonth(prevMonth.name);
      setSelectedDay(`day${prevMonth.startDay}`);
    }
  };

  const handleNextClick = () => {
    const currentMonthIndex = getCurrentMonthIndex();
    if (currentMonthIndex < monthData.length - 1) {
      const nextMonth = monthData[currentMonthIndex + 1];
      setSelectedMonth(nextMonth.name);
      setSelectedDay(`day${nextMonth.startDay}`);
    }
  };

  const generateDayLinks = (startDay, endDay) => {
    const dayLinks = [];
    for (let i = endDay; i >= startDay; i--)
      if (i === 18 && startDay <= 16) {
        dayLinks.push(
          <a
            key={`day16-18`}
            href={`#${selectedMonth.toLowerCase()}day16-18`}
            className={`day16-18 ${selectedMonth.toLowerCase()} fs-7 mt-1`}
            onClick={() => setSelectedDay(`day16-18`)}
          >
            Day 16 - 18 <br />
          </a>
        );
      } else if ((i <= 15 && startDay >= 1) || (i <= 60 && startDay >= 19)) {
        dayLinks.push(
          <a
            key={`day${i}`}
            href={`#${selectedMonth.toLowerCase()}day${i}`}
            className={`day${i} ${selectedMonth.toLowerCase()} fs-7 mt-1`}
            onClick={() => setSelectedDay(`day${i}`)}
          >
            Day {i} <br />
          </a>
        );
      }
    return dayLinks;
  };

  const renderDayLinks = () => {
    const currentMonth = monthData.find(
      (month) => month.name === selectedMonth
    );
    if (currentMonth) {
      return generateDayLinks(currentMonth.startDay, currentMonth.endDay);
    }
    return null;
  };

  return (
    <div className="summary px-4 pt-3 d-none d-md-block">
      <div className="fw-bold sub-header mb-1 summary-navigation">
        Click a Day to navigate
      </div>
      <div className="entrieslabel">{renderDayLinks()}</div>
      <div className="row mt-2">
        <div className="col-6">
          <button
            onClick={handlePrevClick}
            className={`btn btn-prev ${
              getCurrentMonthIndex() === 0 ? "disabled btn-disabled" : "fw-bold"
            }`}
            disabled={getCurrentMonthIndex() === 0}
          >
            Prev
          </button>
        </div>
        <div className="col-6">
          <button
            onClick={handleNextClick}
            className={`btn btn-next ${
              getCurrentMonthIndex() === monthData.length - 1
                ? "disabled btn-disabled"
                : "fw-bold"
            }`}
            disabled={getCurrentMonthIndex() === monthData.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
