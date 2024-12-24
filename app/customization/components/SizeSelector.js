'use client';

import { useCustomization } from '../../context/CustomizationContext';

export default function SizeSelector() {
  const { selectedSize, setSelectedSize } = useCustomization();

  const sizes = ['42mm', '46mm'];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Select Size</h2>
      <div className="flex gap-4">
        {sizes.map((size) => (
          <div
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`cursor-pointer px-4 py-2 border rounded ${
              selectedSize === size ? 'border-black' : 'border-gray-300'
            }`}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
}
