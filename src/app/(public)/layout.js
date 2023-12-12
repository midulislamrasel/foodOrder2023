import Footer from "@/components/Footer/Footer";
import HeaderPublic from "@/components/Header2/HeaderPublic";
import { FaArrowUp } from "react-icons/fa";

export default function RootLayout({ children }) {
  return (
    <>
      <HeaderPublic />
      <main>{children}</main>
      <Footer />
    </>
  );
}
