
import { useState } from 'react';
import { Calendar, Edit, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MyEvents = () => {
  const navigate = useNavigate();
  
  // Mock events data
  const [myEvents, setMyEvents] = useState([
    { id: 1, title: "Football Tournament", date: new Date(2025, 3, 15), type: "Tournament", status: "Upcoming" },
    { id: 2, title: "Basketball Practice", date: new Date(2025, 3, 18), type: "Practice", status: "Upcoming" },
    { id: 3, title: "Swimming Competition", date: new Date(2025, 3, 22), type: "Competition", status: "Upcoming" },
    { id: 4, title: "Team Meeting", date: new Date(2025, 2, 5), type: "Meeting", status: "Past" },
    { id: 5, title: "Soccer Match", date: new Date(2025, 2, 8), type: "Match", status: "Past" },
  ]);

  const [activeTab, setActiveTab] = useState("Upcoming");

  const deleteEvent = (id: number) => {
    // In a real app, you would delete the event from your database here
    setMyEvents(myEvents.filter(event => event.id !== id));
  };

  const filteredEvents = myEvents.filter(event => event.status === activeTab);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Events</h1>
      
      <div className="mb-6 flex border-b">
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'Upcoming' ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Upcoming')}
        >
          Upcoming Events
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'Past' ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Past')}
        >
          Past Events
        </button>
      </div>
      
      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-700">No {activeTab.toLowerCase()} events</h3>
          <p className="text-gray-500 mt-2">Your {activeTab.toLowerCase()} events will appear here</p>
          <button
            onClick={() => navigate('/create-event')}
            className="mt-6 btn-teal"
          >
            Create New Event
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEvents.map(event => (
            <div key={event.id} className="sports-card flex justify-between items-center">
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{event.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>
                    {event.date.toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 text-xs bg-teal-100 text-teal-800 rounded-full">
                    {event.type}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="p-2 text-gray-500 hover:text-teal-600 hover:bg-gray-100 rounded-full">
                  <Edit className="h-5 w-5" />
                </button>
                <button 
                  className="p-2 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-full"
                  onClick={() => deleteEvent(event.id)}
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === 'Upcoming' && filteredEvents.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate('/create-event')}
            className="btn-teal"
          >
            Create New Event
          </button>
        </div>
      )}
    </div>
  );
};

export default MyEvents;
