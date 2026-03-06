import { useState } from "react";
import { Link } from "react-router";
import { Award, Users, BookOpen, Target, Trophy, Star, CheckCircle, Lightbulb, UserCheck, Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { CourseCard } from "../components/CourseCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { BlogCard } from "../components/BlogCard";
import { Button } from "../components/Button";

export function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    class: "",
    courseInterest: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      phone: "",
      class: "",
      courseInterest: "",
    });
  };

  const courses = [
    {
      title: "Class 9 Maths",
      description: "Build a strong foundation in mathematics with comprehensive coverage of NCERT curriculum and practice problems.",
      duration: "12 Months",
    //  students: "500+ Students",
      level: "Foundation",
      image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzI3MjM1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Class 10 Maths",
      description: "Excel in board exams with focused preparation, comprehensive practice, and exam-oriented strategies.",
      duration: "12 Months",
     // students: "650+ Students",
      level: "Board Exam",
      image: "https://images.unsplash.com/photo-1758685734312-5134968399a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGJsYWNrYm9hcmQlMjBlcXVhdGlvbnN8ZW58MXx8fHwxNzcyODA0NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Class 11 Maths",
      description: "Master advanced topics with focus on calculus, trigonometry, and analytical geometry for strong basics.",
      duration: "12 Months",
     // students: "480+ Students",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1758685848352-c527c32b2054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwbWF0aGVtYXRpY3MlMjBjbGFzc3xlbnwxfHx8fDE3NzI4MDQ2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Class 12 Maths",
      description: "Complete board exam preparation with comprehensive coverage of calculus, algebra, and probability.",
      duration: "12 Months",
     // students: "550+ Students",
      level: "Board Exam",
      image: "https://images.unsplash.com/photo-1683127983818-208f46227c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyeSUyMG1hdGhlbWF0aWNzJTIwdG9vbHN8ZW58MXx8fHwxNzcyODA0NTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "IIT-JEE Maths",
      description: "Crack IIT-JEE with advanced problem-solving techniques and previous year question analysis.",
      duration: "24 Months",
    //  students: "400+ Students",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzI3NjU0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "BTech Maths",
      description: "Master engineering mathematics including differential equations and linear algebra.",
      duration: "8 Months",
    //  students: "320+ Students",
      level: "Engineering",
      image: "https://images.unsplash.com/photo-1761821170104-ccd3e3e21318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnQlMjBjYWxjdWxhdG9yfGVufDF8fHx8MTc3MjgwNDYxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "IB Maths",
      description: "Comprehensive IB curriculum coverage with focus on internal assessments and exam prep.",
      duration: "18 Months",
     // students: "180+ Students",
      level: "International",
      image: "https://images.unsplash.com/photo-1731983568664-9c1d8a87e7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwY3VycmljdWx1bSUyMGJvb2tzfGVufDF8fHx8MTc3MjgwNDYxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "USA Maths Tutor",
      description: "Aligned with Common Core and state standards for American curriculum students.",
      duration: "12 Months",
     // students: "150+ Students",
      level: "International",
      image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzI3MjM1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Class 12 Student",
      content: "Improved from 65 to 94 in Maths Board Exam. The personalized attention and excellent teaching methods at Bhaskar Classes made all the difference!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1680983387172-aedb346ba443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjB5b3VuZyUyMGZlbWFsZXxlbnwxfHx8fDE3NzI4MDQ1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Rahul Kumar",
      role: "IIT-JEE Qualifier 2025",
      content: "Bhaskar Classes transformed my understanding of mathematics. The expert guidance helped me crack IIT-JEE with an excellent rank!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1624918479892-3e5df2910410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjB5b3VuZyUyMG1hbGV8ZW58MXx8fHwxNzcyODA0NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Amit Patel",
      role: "BTech Student",
      content: "Best mathematics coaching for engineering students. The faculty's expertise in advanced topics is outstanding. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1624918479892-3e5df2910410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjB5b3VuZyUyMG1hbGV8ZW58MXx8fHwxNzcyODA0NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Experienced Teacher",
      description: "Learn from highly qualified teachers with 15+ years of teaching experience.",
    },
    {
      icon: Lightbulb,
      title: "Concept Clarity Teaching",
      description: "Deep understanding of concepts with practical examples and real-world applications.",
    },
    {
      icon: Users,
      title: "Small Batch Sizes",
      description: "Limited students per batch ensuring individual attention and personalized learning.",
    },
    {
      icon: UserCheck,
      title: "Personal Mentoring",
      description: "One-on-one mentoring sessions to address individual doubts and learning needs.",
    },
    {
      icon: Target,
      title: "Exam-Focused Preparation",
      description: "Strategic preparation focused on board exams and competitive entrance tests.",
    },
  ];

  const blogPosts = [
    {
      title: "Top Formulas for Class 12 Maths",
      description: "Essential formulas you must remember for Class 12 board exams with quick revision tips.",
      image: "https://images.unsplash.com/photo-1758685733433-f0cfa48c5a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGZvcm11bGFzJTIwbm90ZWJvb2t8ZW58MXx8fHwxNzcyNzAyODI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "March 5, 2026",
    },
    {
      title: "How to Prepare for IIT-JEE Maths",
      description: "A comprehensive guide with proven strategies to excel in IIT-JEE mathematics section.",
      image: "https://images.unsplash.com/photo-1676287566089-f4a9eb16f5b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcyODA1MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "March 3, 2026",
    },
    {
      title: "Best Strategy to Score High in Maths Exams",
      description: "Expert tips and time management techniques to maximize your score in mathematics exams.",
      image: "https://images.unsplash.com/photo-1758525861622-f4e7ac86a2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGFtJTIwcHJlcGFyYXRpb24lMjBzdWNjZXNzfGVufDF8fHx8MTc3MjgwNDcwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "March 1, 2026",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1764720573370-5008f1ccc9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3Mjc2OTY3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Students studying mathematics"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Master Mathematics with Expert Coaching
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
                Class 9–12 | IIT-JEE | IB | BTech Maths Coaching
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="accent" className="w-full sm:w-auto text-lg px-8 py-4">
                    Book Free Demo
                  </Button>
                </Link>
                <Link to="/courses">
                  <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 font-medium text-lg">
                    Explore Courses
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side - Inquiry Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-[#111827]">
              <h3 className="text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Book Your Free Demo Class
              </h3>
              <p className="text-[#6B7280] mb-6 text-sm">
                Fill in your details and we'll contact you soon!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[#111827] mb-2 text-sm font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all text-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#111827] mb-2 text-sm font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all text-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="class" className="block text-[#111827] mb-2 text-sm font-medium">
                    Class *
                  </label>
                  <select
                    id="class"
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
                  <label htmlFor="courseInterest" className="block text-[#111827] mb-2 text-sm font-medium">
                    Course Interest *
                  </label>
                  <select
                    id="courseInterest"
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
                    <option value="online">Offline Classes</option>
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
        </div>
      </section>

      {/* Courses Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Courses
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Comprehensive mathematics courses designed for different academic levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Choose Us?
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Experience world-class mathematics education with our proven teaching methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Student Testimonials
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Read success stories from our students who achieved their academic goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Free Demo CTA Section */}
      <section className="py-16 md:py-20 bg-[#F97316] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Book Your Free Maths Demo Class Today
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience our teaching methodology firsthand. Join a free demo class and see the Bhaskar Classes difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#F97316] rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20booking%20a%20free%20demo%20class."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#22c55e] transition-all duration-300 font-medium text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Latest Blog Posts
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Read our latest articles on mathematics tips, strategies, and exam preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button variant="primary" className="text-lg px-8 py-3">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Summary Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Get in Touch
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Have questions? We're here to help! Reach out to us for course inquiries or demo class booking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="tel:+919876543210"
              className="bg-[#F8FAFC] p-8 rounded-xl hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Call Us
              </h3>
              <p className="text-[#6B7280]">+91 9821186101</p>
            </a>

            <a
              href="mailto:info@bhaskarclasses.com"
              className="bg-[#F8FAFC] p-8 rounded-xl hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Email Us
              </h3>
              <p className="text-[#6B7280]">info@bhaskarclasses.com</p>
            </a>

            <div className="bg-[#F8FAFC] p-8 rounded-xl hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Visit Us
              </h3>
              <p className="text-[#6B7280]">Central Market, S-3, Manish Abhinav Plaza-1, Plot No-11, Sector 4, Dwarka, New Delhi, Delhi 110075</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
