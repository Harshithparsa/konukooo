import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  className?: string;
  starClassName?: string;
}

export const StarRating = ({ rating, totalStars = 5, className, starClassName }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const partialStarPercentage = `${(rating - fullStars) * 100}%`;
  const emptyStars = totalStars - Math.ceil(rating);

  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={cn("h-5 w-5 fill-orange-400 text-orange-400", starClassName)} />
      ))}
      {fullStars < totalStars && (
        <div className="relative">
          <Star className={cn("h-5 w-5 text-gray-300", starClassName)} />
          <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: partialStarPercentage }}>
            <Star className={cn("h-5 w-5 fill-orange-400 text-orange-400", starClassName)} />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className={cn("h-5 w-5 text-gray-300", starClassName)} />
      ))}
    </div>
  );
};
