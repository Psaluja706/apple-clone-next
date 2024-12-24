"use client";
import { motion } from "framer-motion";
import { useCustomization } from "../context/CustomizationContext";

export default function Navbar() {
  const { selectedCollection, setSelectedCollection } = useCustomization();

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
      <h1 className="text-xl font-bold"></h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-lg font-semibold mb-2">Switch Collection</h2>
        <div className="flex justify-center items-center">
          <select
            className="p-2 border rounded "
            value={selectedCollection}
            onChange={(e) => setSelectedCollection(e.target.value)}
          >
            <option value="Series 10">Series 10</option>
            <option value="Hermès">Hermès</option>
            <option value="SE">SE</option>
          </select>
        </div>
      </motion.div>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">
        Save
      </button>
    </nav>
  );
}
