'use client';

import { useCustomization } from '../../context/CustomizationContext';
import { motion } from 'framer-motion';

export default function CollectionSwitcher() {
  const { selectedCollection, setSelectedCollection } = useCustomization();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-8"
    >
      <h2 className="text-lg font-semibold mb-2">Switch Collection</h2>
      <select
        className="p-2 border rounded"
        value={selectedCollection}
        onChange={(e) => setSelectedCollection(e.target.value)}
      >
        <option value="Series 10">Series 10</option>
        <option value="Hermès">Hermès</option>
        <option value="SE">SE</option>
      </select>
    </motion.div>
  );
}
