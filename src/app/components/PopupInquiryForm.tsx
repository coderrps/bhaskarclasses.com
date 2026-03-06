import { useState, useEffect } from "react";
import { X, GraduationCap } from "lucide-react";

export function PopupInquiryForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    class: "",
    courseInterest: "",
  });

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setIsOpen(false);
    setFormData({
      name: "",
      phone: "",
      class: "",
      courseInterest: "",
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] p-8 rounded-t-2xl text-white text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Book Your Free Demo Class
            </h3>
            <p className="text-white/90 text-sm">
              Fill in your details and we'll contact you soon!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <div>
              <label htmlFor="popup-name" className="block text-[#111827] mb-2 text-sm font-medium">
                Name *
              </label>
              <input
                type="text"
                id="popup-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all text-sm"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="popup-phone" className="block text-[#111827] mb-2 text-sm font-medium">
                Phone Number *
              </label>
              <input
                type="tel"
                id="popup-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all text-sm"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="popup-class" className="block text-[#111827] mb-2 text-sm font-medium">
                Class *
              </label>
              <select
                id="popup-class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all bg-white text-sm"
              >
                <option value="">Select your class</option>
                <option value="class9">Class 9</option>
                <option value="class10">Class 10</option>
                <option value="class11">Class 11</option>
                <option value="class12">Class 12</option>
                <option value="iitjee">IIT-JEE Preparation</option>
                <option value="btech">BTech</option>
                <option value="ib">IB</option>
                <option value="usa">USA Curriculum</option>
              </select>
            </div>

            <div>
              <label htmlFor="popup-course" className="block text-[#111827] mb-2 text-sm font-medium">
                Course Interest *
              </label>
              <select
                id="popup-course"
                name="courseInterest"
                value={formData.courseInterest}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all bg-white text-sm"
              >
                <option value="">Select course type</option>
                <option value="oneOnOne">One-on-One Classes</option>
                <option value="smallGroup">Small Group Classes</option>
                <option value="online">Online Classes</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#F97316] text-white rounded-lg hover:bg-[#ea6c0f] transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Request Free Demo
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
