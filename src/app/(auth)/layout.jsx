import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function AuthLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
