import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: string;
}

export default function StarRating({
  rating,
  reviewCount,
  size = "text-sm",
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1.5">
      <div className={`flex items-center gap-0.5 text-[#C9922E] ${size}`}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-[#5B6152] text-xs">({reviewCount})</span>
      )}
    </div>
  );
}
