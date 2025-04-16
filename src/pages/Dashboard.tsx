
import { CalendarClock, CalendarDays, Users } from "lucide-react";

const Dashboard = () => {
  // Mock data
  const upcomingEvents = [
    { id: 1, name: "Football Tournament", date: "April 20, 2025", type: "Tournament", participants: 12 },
    { id: 2, name: "Basketball Practice", date: "April 22, 2025", type: "Practice", participants: 8 },
    { id: 3, name: "Swimming Competition", date: "May 1, 2025", type: "Competition", participants: 15 },
  ];

  const stats = [
    { title: "Total Events", value: 24, icon: CalendarDays, bgColor: "bg-teal-500" },
    { title: "Upcoming Events", value: 8, icon: CalendarClock, bgColor: "bg-teal-600" },
    { title: "Total Participants", value: 152, icon: Users, bgColor: "bg-teal-700" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="sports-card flex items-center">
            <div className={`${stat.bgColor} p-4 rounded-lg mr-4`}>
              <stat.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="sports-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Upcoming Events</h2>
            <a href="/calendar" className="text-teal-600 hover:text-teal-800 text-sm">View all</a>
          </div>
          
          <div className="divide-y divide-gray-100">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-gray-800">{event.name}</h3>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-1 text-xs bg-teal-100 text-teal-800 rounded-full">
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="sports-card">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Event Breakdown</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tournaments</span>
                <span className="font-medium text-gray-800">8 events</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: "40%" }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Practices</span>
                <span className="font-medium text-gray-800">12 events</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Competitions</span>
                <span className="font-medium text-gray-800">4 events</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: "20%" }}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <a href="/create-event" className="btn-teal flex justify-center items-center">
              Create New Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
