"use client";

import { useState } from "react";

export default function WatchDisplay() {
  const [isSideView, setIsSideView] = useState(false);
  const a = [
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
  ];

  return (
    <div className="text-center mt-10">
      <img
        src={isSideView ? a[1] : a[0]}
        alt="Apple Watch"
        className="mx-auto mb-4 w-64 h-64"
      />
      <a
        className="text-blue-600 underline text-sm cursor-pointer"
        onClick={() => setIsSideView((prev) => !prev)}
      >
        Side view
      </a>
      <h2 className="mt-4 text-lg font-bold">APPLE WATCH SERIES 10</h2>
      <p className="text-gray-500 mt-2">
        46mm Jet Black Aluminum Case with Black Solo Loop
      </p>
      <p className="text-gray-800 font-semibold mt-4">From $429</p>
    </div>
  );
}
