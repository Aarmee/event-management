import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { SportEvent } from '../types'; // Make sure to import the SportEvent interface
import { format } from 'date-fns';
interface SportCardProps {
  event: SportEvent; // Use the SportEvent interface
}
export default function SportCard({ event }: SportCardProps) {
  return (
    <Link to={`/sport/${event.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-[1.02]">
        <div className="relative">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" // Apply scale on hover
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-indigo-600 uppercase">
              {event.category}
            </span>
            <span className="text-sm font-medium text-gray-600">
              ${event.price.toFixed(2)} {/* Format price to two decimal places */}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{format(new Date(event.date), 'MMM dd, yyyy')}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">{event.time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{event.venue}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}