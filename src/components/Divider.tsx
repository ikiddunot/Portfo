import { Star } from 'lucide-react';

export default function Divider() {
  return (
    <div className="flex items-center justify-center space-x-4 my-12">
      <div className="h-1 w-16 bg-campaign-red rounded-full"></div>
      <Star className="text-campaign-blue w-6 h-6 fill-current" />
      <Star className="text-campaign-red w-8 h-8 fill-current" />
      <Star className="text-campaign-blue w-6 h-6 fill-current" />
      <div className="h-1 w-16 bg-campaign-red rounded-full"></div>
    </div>
  );
}
