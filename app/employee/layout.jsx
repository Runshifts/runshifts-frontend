import { Inter } from "next/font/google";
import "../globals.css";
import EmployeeGlobalLayout from "../_components/EmployeeGlobalLayouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Runshifts - Employee",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EmployeeGlobalLayout>{children}</EmployeeGlobalLayout>
      </body>
    </html>
  );
}
