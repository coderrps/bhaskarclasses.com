import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingButtons } from "../components/FloatingButtons";
import { PopupInquiryForm } from "../components/PopupInquiryForm";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
      <PopupInquiryForm />
    </div>
  );
}