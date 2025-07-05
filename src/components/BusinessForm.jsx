import { useState } from 'react';

const BusinessForm = ({ onSubmit, disabled }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, location);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto"
    >
      <h3 className="text-lg font-semibold mb-4">Business Information</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Business Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
          disabled={disabled}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
          disabled={disabled}
        />
      </div>
      <button
        type="submit"
        disabled={disabled}
        className={`mt-6 px-6 py-3 rounded-md text-white font-medium shadow-md transition-all ${
          disabled
            ? 'bg-[#a3bfa7] cursor-not-allowed'
            : 'bg-[linear-gradient(to_right,_#15813e,_#22c55e)] hover:brightness-110'
        }`}
      >
        {disabled ? 'Submit' : 'Submit'}
      </button>
    </form>
  );
};

export default BusinessForm;
