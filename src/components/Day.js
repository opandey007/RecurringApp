import React, { useState } from 'react';

const DaysOfWeekSelector = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div>
      <div className="days-container">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className={`day ${selectedDays.includes(day) ? 'selected' : ''}`}
            onClick={() => toggleDay(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaysOfWeekSelector;
