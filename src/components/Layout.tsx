import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden">
        <Header />
        <main className="relative mx-auto max-w-lg px-4">{children}</main>
      </div>
    </>
  );
}
