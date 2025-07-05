import { useState } from "react";
import BusinessForm from "./components/BusinessForm";
import ResultCard from "./components/ResultCard";
import { submitBusinessData, regenerateHeadline } from "./services/api";

function App() {
  const [formData, setFormData] = useState({ name: "", location: "" });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (name, location) => {
    setLoading(true);
    setFormData({ name, location });
    const response = await submitBusinessData(name, location);
    setResult(response);
    setTimeout(() => setLoading(false),100); 
  };

  const handleRegenerate = async () => {
    setLoading(true);
    const response = await regenerateHeadline(
      formData.name,
      formData.location,
      result.headline
    );
    setResult((prev) => ({ ...prev, headline: response.headline }));
    setTimeout(() => setLoading(false),100); 
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-b from-green-50 to-white px-4 py-10">
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-green-600 text-sm font-semibold mb-2">
          AI-Powered Business & Web Growth Solutions
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-[linear-gradient(to_right,_#15813e,_#22c55e)] mb-[15px]">
          Get Found. Get Chosen. Grow Effortlessly.
        </h1>

        <BusinessForm onSubmit={handleFormSubmit} disabled={loading} />

        {loading ? (
          <div className="mt-6 h-[180px] bg-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto text-left flex flex-col justify-center space-y-4">
            <div className="h-4 w-1/2 rounded bg-[linear-gradient(to_right,_#15813e,_#22c55e)] animate-pulse"></div>
            <div className="h-6 w-2/3 rounded bg-[linear-gradient(to_right,_#15813e,_#22c55e)] animate-pulse"></div>
            <div className="h-10 w-3/3 rounded bg-[linear-gradient(to_right,_#15813e,_#22c55e)] animate-pulse"></div>
          </div>
        ) : (
          result && (
            <div className="mt-6 h-[180px] bg-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto text-left flex flex-col justify-between space-y-4">
              <ResultCard
                result={result}
                onRegenerate={handleRegenerate}
                loading={loading}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
