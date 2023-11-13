import React, { useState } from 'react';

const TimeDropdown = () => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const renderTimeOptions = () => {
    const hours = Array.from({ length: 12 }, (_, index) => index + 1);
    const minutes = [0, 30, 45];

    const timeOptions = [];

    hours.forEach((hour) => {
      minutes.forEach((minute) => {
        const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
        const formattedMinute = minute === 0 ? '00' : `${minute}`;

        const timeValue = `${formattedHour}:${formattedMinute}`;

        timeOptions.push(
          <option key={timeValue} value={timeValue}>
            {`${formattedHour}:${formattedMinute}`}
          </option>
        );
      });
    });

    return timeOptions;
  };

  return (
    <div>
      <select id="time" value={selectedTime} onChange={handleTimeChange}>
        <option value="" disabled></option>
        {renderTimeOptions()}
      </select>
    </div>
  );
};

export default TimeDropdown;
