import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Calendar() {
  return (
    <div className="page">
      <h2>Schedule</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Meeting', date: '2025-06-10' },
          { title: 'Deadline', date: '2025-06-15' },
        ]}
      />
    </div>
  );
}

export default Calendar;
