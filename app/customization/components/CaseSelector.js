'use client';

import { useCustomization } from '../../context/CustomizationContext';
import { motion } from 'framer-motion';

export default function CaseSelector() {
  const { selectedCase, setSelectedCase } = useCustomization();

  const cases = [
    { name: 'Aluminum', image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Aluminum+Case' },
    { name: 'Stainless Steel', image: 'https://via.placeholder.com/150/808080/FFFFFF?text=Stainless+Steel+Case' },
    { name: 'Titanium', image: 'https://via.placeholder.com/150/555555/FFFFFF?text=Titanium+Case' },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Select Case</h2>
      <div className="grid grid-cols-2 gap-4">
        {cases.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCase(item.name)}
            className={`card ${
              selectedCase === item.name ? 'ring-2 ring-black' : ''
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
