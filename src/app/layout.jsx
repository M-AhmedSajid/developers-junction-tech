import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AOSInit } from "./utils/AOSInit";
import { LoaderProvider } from "./context/loaderContext";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "./utils/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Developers Junction Tech | Empower Your Business with Excellence",
  description: "We serve both B2B and B2C clients, offering expertise in Web and Mobile Solutions, Cloud based ERP systems like Microsoft Dynamics 365 and Oracle along with PowerBI services for data-driven insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <AOSInit />
      <body className={inter.className}>
        <LoaderProvider>
          <Navbar />
          <Toaster position="bottom-right" toastOptions={{duration: 3000}} />
          {children}
          <Footer />
        </LoaderProvider>
      </body>
    </html>
  );
}
