import { useState } from "react";

const InteractiveSchedule = ({ tracks }) => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <div>
      <div className="flex space-x-4 overflow-x-auto">
        {tracks.map((track, index) => (
          <button
            key={index}
            onClick={() => setSelectedTrack(track)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white"
          >
            {track.name}
          </button>
        ))}
      </div>
      {selectedTrack && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-bold text-xl">{selectedTrack.name}</h3>
          <p>{selectedTrack.details}</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveSchedule;
