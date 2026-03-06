import { MessageCircle, Phone } from "lucide-react";

export function FloatingButtons() {
  const handleWhatsAppClick = () => {
    // WhatsApp number format: country code + number without + or spaces
    const phoneNumber = "919821186101"; // +91 98765 43210
    const message = encodeURIComponent("Hi! I'm interested in learning more about Bhaskar Classes.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919821186101";
  };

  return (
    <>
      {/* WhatsApp Button - Left Side */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed left-4 md:left-6 bottom-24 md:bottom-6 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
        <span className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </button>

      {/* Call Button - Bottom Right */}
      <button
        onClick={handleCallClick}
        className="fixed right-4 md:right-6 bottom-6 w-14 h-14 md:w-16 md:h-16 bg-[#F97316] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 md:w-8 md:h-8" />
        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call Us Now
        </span>
      </button>
    </>
  );
}
