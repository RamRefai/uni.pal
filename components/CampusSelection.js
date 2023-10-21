import { useState } from 'react';
import { useRouter } from 'next/router';

function CampusSelection() {
  const router = useRouter();
  const [selectedCampus, setSelectedCampus] = useState('');

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
  };

  const handleNext = () => {
    if (selectedCampus) {
      // Redirect to the next screen based on the selected campus
      router.push(`${selectedCampus}`);
    } else {
      // Handle invalid selection if needed
      alert('Please select a campus.');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <select 
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline dark:text-black"
        onChange={handleCampusChange} 
        value={selectedCampus}
      >
        <option value="">Select a campus</option>
        <option value="/campuses/UTA/home">University of Texas at Arlington</option>
        {/* Add more options as needed */}
      </select>
      <button 
        className="bg-bermuda hover:bermuda text-white font-bold py-2 px-4 rounded"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default CampusSelection;
