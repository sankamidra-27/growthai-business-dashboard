import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ResultCard = ({ result, onRegenerate, loading }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    while (stars.length < 5) {
      stars.push(
        <FaRegStar key={`empty-${stars.length}`} className="text-yellow-400" />
      );
    }

    return (
      <div
        className="flex items-center gap-0.5"
        title={`${rating} out of 5 stars`}
      >
        {stars}
      </div>
    );
  };

  return (
    <div className="space-y-4 px-4 sm:px-0">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-4 w-auto mt-[5px]"
            />
            <span>
              Rating: <strong>{result.rating}</strong> •{" "}
              <strong>{result.reviews}</strong>{" "}
              <span className="text-gray-400">Reviews</span>
            </span>
          </div>
        </div>
        {renderStars(result.rating)}
      </div>

      <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 text-center sm:text-left">
        {result.headline}
      </h2>

      <button
        onClick={onRegenerate}
        disabled={loading}
        className={`w-full sm:w-auto px-5 py-3 rounded-md text-white font-medium shadow-md transition-all text-sm sm:text-base mb-6 ${
          loading
            ? "bg-green-200 text-green-800 cursor-not-allowed"
            : "bg-[linear-gradient(to_right,_#15813e,_#22c55e)] hover:brightness-110"
        }`}
      >
        {loading ? "Loading..." : "Regenerate SEO Headline →"}
      </button>
    </div>
  );
};

export default ResultCard;
