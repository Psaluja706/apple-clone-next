'use client';

import { useCustomization } from '../../context/CustomizationContext';
import { motion } from 'framer-motion';

export default function BandSelector() {
  const { selectedBand, setSelectedBand } = useCustomization();

  const bands = [
    { name: 'Sport Band', image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Sport+Band' },
    { name: 'Solo Loop', image: 'https://via.placeholder.com/150/FF4500/FFFFFF?text=Solo+Loop+Band' },
    { name: 'Leather', image: 'https://via.placeholder.com/150/8B4513/FFFFFF?text=Leather+Band' },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Select Band</h2>
      <div className="grid grid-cols-2 gap-4">
        {bands.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedBand(item.name)}
            className={`card ${
              selectedBand === item.name ? 'ring-2 ring-black' : ''
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-24 object-cover"
            />
            <p className="text-center mt-2">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
