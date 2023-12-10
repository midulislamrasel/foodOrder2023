'use client'

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useEffect } from "react";

export default function RootLayout({ children }) {

  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
  }, [])
  
  return (
    <>
    <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}
