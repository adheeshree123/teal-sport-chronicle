
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Mock events data
  const events = [
    { id: 1, title: "Football Tournament", date: new Date(2025, 3, 15), type: "Tournament" },
    { id: 2, title: "Basketball Practice", date: new Date(2025, 3, 18), type: "Practice" },
    { id: 3, title: "Swimming Competition", date: new Date(2025, 3, 22), type: "Competition" },
    { id: 4, title: "Team Meeting", date: new Date(2025, 3, 5), type: "Meeting" },
    { id: 5, title: "Soccer Match", date: new Date(2025, 3, 8), type: "Match" },
  ];

  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
    const today = new Date();
    
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const rows = Math.ceil((days + firstDay) / 7);
    
    const calendar = [];
    
    // Day names header
    calendar.push(
      <div key="header" className="grid grid-cols-7 text-sm font-semibold mb-1">
        {dayNames.map(day => (
          <div key={day} className="p-2 text-center">{day}</div>
        ))}
      </div>
    );
    
    // Calendar grid
    let dayCounter = 1;
    
    for (let i = 0; i < rows; i++) {
      const row = [];
      
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || dayCounter > days) {
          // Empty cell
          row.push(<div key={`empty-${i}-${j}`} className="border border-border p-2 bg-gray-50"></div>);
        } else {
          // Date cell
          const date = new Date(year, month, dayCounter);
          const isToday = today.getDate() === dayCounter && 
                           today.getMonth() === month && 
                           today.getFullYear() === year;
          
          // Find events for this day
          const dayEvents = events.filter(event => {
            return event.date.getDate() === dayCounter && 
                   event.date.getMonth() === month && 
                   event.date.getFullYear() === year;
          });
          
          const hasEvents = dayEvents.length > 0;
          
          row.push(
            <div 
              key={`day-${dayCounter}`} 
              className={`calendar-day ${isToday ? 'today' : ''} ${hasEvents ? 'has-event' : ''}`}
            >
              <div className="flex justify-between items-start">
                <span className={`inline-block h-6 w-6 text-center ${isToday ? 'font-bold' : ''}`}>
                  {dayCounter}
                </span>
              </div>
              
              <div className="mt-1 space-y-1 max-h-[60px] overflow-y-auto">
                {dayEvents.map((event) => (
                  <div key={event.id} className="event-pill">
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
          
          dayCounter++;
        }
      }
      
      calendar.push(
        <div key={`row-${i}`} className="grid grid-cols-7">
          {row}
        </div>
      );
    }
    
    return calendar;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Calendar</h1>
        <div className="flex items-center space-x-4">
          <button 
            onClick={prevMonth} 
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h2 className="text-xl font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button 
            onClick={nextMonth} 
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <div className="space-y-1">
          {renderCalendar()}
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Upcoming Events</h3>
        <a href="/create-event" className="btn-teal">
          Create Event
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <div key={event.id} className="sports-card">
            <h4 className="font-medium text-gray-800">{event.title}</h4>
            <p className="text-sm text-gray-500">
              {event.date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <div className="mt-2">
              <span className="inline-block px-2 py-1 text-xs bg-teal-100 text-teal-800 rounded-full">
                {event.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
