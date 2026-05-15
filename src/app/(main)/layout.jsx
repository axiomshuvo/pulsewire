import BreakingNews from "@/components/shared/BreakingNews";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <BreakingNews />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
