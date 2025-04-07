import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Concert } from '../types'; // Make sure to import the Concert interface
import { format } from 'date-fns';
interface ConcertCardProps {
  concert: Concert; // Use the Concert interface
}
export default function ConcertCard({ concert }: ConcertCardProps) {
  return (
    <Link to={`/concert/${concert.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-[1.02]">
        <img
          src={concert.imageUrl}
          alt={concert.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-indigo-600 uppercase">
              {concert.category}
            </span>
            <span className="text-sm font-medium text-gray-600">
              ${concert.price.toFixed(2)} {/* Format price to two decimal places */}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{concert.title}</h3>
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{format(new Date(concert.date), 'MMM dd, yyyy')}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">{concert.time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{concert.venue}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}