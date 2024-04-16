import React from 'react';

const WorkBoxes = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src="../public/images/railway.jpg" alt="Railway" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Railway</h2>
              <p className="text-gray-700">Explore job opportunities in the railway sector.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src="../public/images/construction.jpg" alt="Construction" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Construction</h2>
              <p className="text-gray-700">Discover construction-related job opportunities.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src="../public/images/airport.jpg" alt="airport" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Airport</h2>
              <p className="text-gray-700">Discover construction-related job opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkBoxes;
