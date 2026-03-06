import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "../components/Button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 9821186101",
      link: "tel:+919821186101",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@bhaskarclasses.com",
      link: "mailto:info@bhaskarclasses.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Education Street, Learning City, IN 110001",
      link: "#",
    },
    {
      icon: Clock,
      title: "Office Hours",
      info: "Mon - Sat: 9:00 AM - 7:00 PM",
      link: "#",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Have questions? We're here to help! Reach out to us for course inquiries, 
              demo class booking, or any other information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Contact Information
              </h2>
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    className="block bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#111827] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {item.title}
                        </h3>
                        <p className="text-[#6B7280] text-sm">{item.info}</p>
                      </div>
                    </div>
                  </a>
                );
              })}

              {/* Map Placeholder */}
              <div className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <h3 className="font-semibold text-[#111827] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Institute Location
                </h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <MapPin className="w-12 h-12 text-gray-400 absolute z-10" />
                  {/* Google Maps iframe would go here in production */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 to-[#6D28D9]/10"></div>
                  <p className="absolute bottom-4 left-4 right-4 text-center text-sm text-[#6B7280] bg-white/90 backdrop-blur-sm p-2 rounded z-20">
                    123 Education Street, Learning City, IN 110001
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <h2 className="text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Book a Free Demo Class
                </h2>
                <p className="text-[#6B7280] mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 bg-[#22C55E]/10 border border-[#22C55E] rounded-lg">
                    <p className="text-[#22C55E] font-medium">
                      Thank you! We've received your inquiry and will contact you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#111827] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-[#111827] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[#111827] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-[#111827] mb-2">
                      Course of Interest *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a course</option>
                      <option value="class9">Class 9 Maths</option>
                      <option value="class10">Class 10 Maths</option>
                      <option value="class11">Class 11 Maths</option>
                      <option value="class12">Class 12 Maths</option>
                      <option value="iitjee">IIT-JEE Maths (Main + Advanced)</option>
                      <option value="btech">BTech Maths</option>
                      <option value="ib">IB Maths</option>
                      <option value="usa">USA Curriculum Maths</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#111827] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Prefer to Talk Directly?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Call us now or message on WhatsApp for instant support and course information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919821186101">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#1E3A8A] rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </button>
              </a>
              <a
                href="https://wa.me/919821186101?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20Bhaskar%20Classes."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#22c55e] transition-all duration-300 font-medium text-lg flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  WhatsApp Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}