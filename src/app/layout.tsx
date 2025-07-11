import type { Metadata } from "next";
import Navbar from "@/Components/Navbar/Navbar";
import AppProvider from "@/ContextAPI/AppContext";
import Drawer from "@/Components/Aside/Drawer/Drawer";
import "../scss/styles.scss";

export const metadata: Metadata = {
  title: "Video Platfor | MyTube",
  description: "Watch, Upload Video Online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">{children}</div>
        <AppProvider>
          <Navbar />
          <Drawer />
        </AppProvider>
      </body>
    </html>
  );
}
