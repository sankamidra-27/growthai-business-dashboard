const ResultCard = ({ result, onRegenerate, loading }) => {
  return (
    <>
      <p className="text-sm text-gray-500">
        Google Rating ⭐ <strong>{result.rating}</strong> —{' '}
        <strong>{result.reviews}</strong> Reviews
      </p>
      <h2 className="text-xl font-semibold text-gray-800">{result.headline}</h2>
      <button
        onClick={onRegenerate}
        disabled={loading}
        className={`px-6 py-3 rounded-md text-white font-medium shadow-md transition-all ${
          loading
            ? 'bg-[#a3bfa7] cursor-not-allowed'
            : 'bg-[linear-gradient(to_right,_#15813e,_#22c55e)] hover:brightness-110'
        }`}
      >
        {loading ? 'Loading...' : 'Regenerate SEO Headline →'}
      </button>
    </>
  );
};

export default ResultCard;
