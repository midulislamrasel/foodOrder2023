import Footer from "@/components/Footer/Footer";
import HeaderPublic from "@/components/Header2/HeaderPublic";

export default function RootLayout({ children }) {
  return (
    <>
      <HeaderPublic />
      <main>{children}</main>
      <Footer />
    </>
  );
}
