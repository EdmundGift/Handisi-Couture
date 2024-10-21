import React, { useState } from 'react';

function Account() {
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    hips: '',
    inseam: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeasurements((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Measurements submitted:', measurements);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">My Account</h1>
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">My Measurements</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.entries(measurements).map(([key, value]) => (
            <div key={key}>
              <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-1">
                {key.charAt(0).toUpperCase() + key.slice(1)} (inches)
              </label>
              <input
                type="number"
                id={key}
                name={key}
                value={value}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Measurements
          </button>
        </form>
      </div>
    </div>
  );
}

export default Account;