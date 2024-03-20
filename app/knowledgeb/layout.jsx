import { Poppins } from "next/font/google";
import "../globals.css";
import KnowledgeBaseLayout from '../_components/KnowledgeBaseLayout'

const poppin = Poppins({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900',]
  });

export const metadata = {
  title: "Runshifts - Knowledge Base",
  description: "Knowledge Base",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={poppin.className}>
        <KnowledgeBaseLayout>{children}</KnowledgeBaseLayout>
      </body>
    </html>
  );
}
