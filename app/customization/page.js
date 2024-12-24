"use client";
import { motion } from "framer-motion";
import CaseSelector from "./components/CaseSelector";
import SizeSelector from "./components/SizeSelector";
import BandSelector from "./components/BandSelector";
import WatchPreview from "./components/WatchPreview";
import Collection from "./components/CollectionSwitcher";
import { useCustomization } from "../context/CustomizationContext";
import CollectionSwitcher from "./components/CollectionSwitcher";
import Navbar from "./Navbar";
import WatchDisplay from "./components/WatchDisplay";
import Controls from "./Controls";

export default function Customization() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Navbar />
        <WatchDisplay />
        <Controls />
      </main>
    </>
  );
}
