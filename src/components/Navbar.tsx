
import { Link, useLocation } from "react-router-dom";
import { CalendarDays, Home, Plus, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <CalendarDays className="h-8 w-8 text-teal-600" />
              <span className="ml-2 text-xl font-bold text-teal-800">TurfGame</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            <Link 
              to="/dashboard" 
              className={cn("nav-link", isActive("/dashboard") && "active")}
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/calendar" 
              className={cn("nav-link", isActive("/calendar") && "active")}
            >
              <CalendarDays className="h-5 w-5" />
              <span>Calendar</span>
            </Link>
            <Link 
              to="/create-event" 
              className={cn("nav-link", isActive("/create-event") && "active")}
            >
              <Plus className="h-5 w-5" />
              <span>Create Event</span>
            </Link>
            <Link 
              to="/my-events" 
              className={cn("nav-link", isActive("/my-events") && "active")}
            >
              <User className="h-5 w-5" />
              <span>My Events</span>
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link 
              to="/" 
              className="text-teal-600 hover:text-teal-800"
              onClick={(e) => {
                e.preventDefault();
                // In a real app, this would log the user out
                window.location.href = "/";
              }}
            >
              Log out
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
