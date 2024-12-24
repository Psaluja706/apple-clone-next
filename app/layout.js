"use client";
import "./globals.css";
import { CustomizationProvider } from "./context/CustomizationContext";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body>
        <div
          className="absolute left-4 top-4 w-24 h-24 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
            alt="apple-logo"
            width="100%"
            height="100%"
          />
        </div>
        <CustomizationProvider>{children}</CustomizationProvider>
      </body>
    </html>
  );
}
