import { Quote, Star } from "lucide-react";

const ReviewCard = ({ logo, description, reviewer, rating }) => {
  // Render star icons based on the rating
  const renderStars = () => {
    return [...Array(5)].map((_, index) =>
      index < rating ? (
        <Star key={index} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      ) : (
        ""
      )
    );
  };

  return (
    <div className="bg-lavender-light p-6 rounded-xl shadow-md max-w-md w-full flex flex-col justify-between min-h-[300px] md:aspect-[2/1.5]">
      {/* Quote Icon */}
      <div className="flex items-start justify-between mb-2">
        <Quote className="text-lilac w-6 h-6" />
      </div>

      {/* Description */}
      <p className="text-medium-gray text-sm flex-1 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center space-x-1">{renderStars()}</div>

      {/* Divider */}
      <div className="border-t border-warm-gray my-4"></div>

      {/* Footer: Logo, Reviewer & Stars */}
      <div className="flex items-center justify-between">
        {/* Reviewer Info */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt={`${reviewer} company logo`}
            className="h-8 w-8 object-contain"
          />
          <span className="text-dark-gray text-sm font-medium">{reviewer}</span>
        </div>

        {/* Stars */}
      </div>
    </div>
  );
};

export default ReviewCard;
