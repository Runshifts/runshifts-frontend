import { Inter } from "next/font/google";
import "../globals.css";
import AdminGlobalLayout from "../_components/AdminGlobalLayouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Runshifts - Admin",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminGlobalLayout>{children}</AdminGlobalLayout>
      </body>
    </html>
  );
}
