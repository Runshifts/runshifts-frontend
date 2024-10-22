"use client";
import React from "react";
import KnowledgeBaseNav from "./navbar/KnowledgeBaseNav";
import Footer from "./homepageComps/Footer";

export default function KnowledgeBaseLayout({ children }) {
  return (
    <div className="relative">
      <KnowledgeBaseNav />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
