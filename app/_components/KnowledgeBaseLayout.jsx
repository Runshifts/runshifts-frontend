"use client";
import React from "react";
import KnowledgeBaseNav from './navbar/KnowledgeBaseNav'

export default function KnowledgeBaseLayout({ children }) {
  return (
    <div className="relative">
      <KnowledgeBaseNav />

      <div className="">{children}</div>
    </div>
  );
}
