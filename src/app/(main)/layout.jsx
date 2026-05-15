import BreakingNews from "@/components/shared/BreakingNews";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className=" pt-10 min-h-screen">
      <Header />
      <BreakingNews />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
