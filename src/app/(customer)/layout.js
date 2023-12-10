import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";


export default function CustomerLayout({ children }) {

  return (
    <>
    <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}
