import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    axios.get(`http://localhost:8877/api/event/booking?date=${date.toISOString().slice(0, 10)}`)
      .then((response) => {
        // Filter available slots and update state
        const bookedSlots = response.data.map((event) => [event.startTime, event.endTime]);
        const allSlots = getAllSlots();
        const filteredSlots = allSlots.filter((slot) => !bookedSlots.some((bookedSlot) => areSlotsEqual(slot, bookedSlot)));
        setAvailableSlots(filteredSlots);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllSlots = () => {
    const allSlots = [];
    const startHour = 9;
    const endHour = 17;
    for (let hour = startHour; hour <= endHour; hour++) {
      allSlots.push(`${hour}:00 - ${hour + 1}:00`);
    }
    return allSlots;
  };

  const areSlotsEqual = (slot1, slot2) => {
    return slot1[0] === slot2[0] && slot1[1] === slot2[1];
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <DatePicker selected={selectedDate} onChange={handleDateSelect} />
      console.log(selectedDate);
      <h2>Available Slots:</h2>
      <ul>
        {availableSlots.map((slot, index) => (
          <li key={index}>{slot}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookingPage;
