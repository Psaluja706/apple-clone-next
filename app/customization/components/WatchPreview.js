'use client';

import { useCustomization } from '../../context/CustomizationContext';

export default function WatchPreview() {
  const { selectedCase, selectedSize, selectedBand } = useCustomization();

  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Your Watch Preview</h2>
      <div className="inline-block p-4 bg-white rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/300x300/FFFFFF/000000?text=Your+Watch+Preview"
          alt="Watch Preview"
          className="w-64 mx-auto"
        />
        <p className="mt-4">
          <strong>Case:</strong> {selectedCase || 'None'} <br />
          <strong>Size:</strong> {selectedSize || 'None'} <br />
          <strong>Band:</strong> {selectedBand || 'None'}
        </p>
      </div>
    </div>
  );
}
