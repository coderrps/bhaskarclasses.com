import { Award, Target, Heart, Users, CheckCircle, GraduationCap } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/Button";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in teaching and student outcomes, setting high standards in mathematics education.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our passionate teachers love mathematics and inspire students to discover its beauty and applications.",
    },
    {
      icon: Users,
      title: "Individual Attention",
      description: "Every student is unique, and we provide personalized attention to help each one reach their full potential.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our track record of student success in board exams and competitive entrance tests speaks for itself.",
    },
  ];

  const milestones = [
    { year: "2009", event: "Bhaskar Classes was founded with a vision to make quality mathematics education accessible." },
    { year: "2012", event: "Expanded to offer IIT-JEE preparation programs with specialized faculty." },
    { year: "2016", event: "Launched online classes to reach students across the country." },
    { year: "2020", event: "Introduced international curriculum courses (IB and USA Curriculum)." },
    { year: "2024", event: "Celebrated 15 years of excellence with 2000+ successful students." },
  ];

  const achievements = [
    "500+ students scored above 90% in board exams",
    "200+ students qualified for IIT-JEE",
    "95% student satisfaction rate",
    "Recognized as Top Mathematics Coaching Institute",
    "Awarded Best Educational Institution 2023",
    "Featured in leading education magazines",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              About Bhaskar Classes
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Empowering students with quality mathematics education for over 15 years. 
              Join us on the journey to academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Institute Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                How Bhaskar Classes Started
              </h2>
              <div className="space-y-4 text-[#111827] leading-relaxed">
                <p>
                  Founded in 1995 by Prof. S. K. Singh Bhaskar, Bhaskar Classes began with a simple mission: 
                  to make mathematics accessible, enjoyable, and achievable for every student.
                </p>
                <p>
                  What started as a small coaching center with just 15 students has grown into one of 
                  the most trusted names in mathematics education, serving over 2000 students annually.
                </p>
                <p>
                  Our success is built on a foundation of passionate teaching, personalized attention, 
                  and a deep commitment to student success. We believe that every student has the 
                  potential to excel in mathematics with the right guidance and support.
                </p>
                <p>
                  Today, we offer comprehensive mathematics courses from Class 9 to engineering level, 
                  including specialized programs for IIT-JEE and international curricula.
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1764720573370-5008f1ccc9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3Mjc2OTY3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Classroom students learning"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Journey Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1758685733907-42e9651721f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwbWVudG9yJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3Mjc4MDU2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Teacher mentoring students"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Founder's Journey
              </h2>
              <div className="space-y-4 text-[#111827] leading-relaxed">
                <p>
                  Prof. S. K. Singh Bhaskar, with over 30 years of teaching experience, founded Bhaskar Classes 
                  after recognizing a gap in quality mathematics education. His passion for making complex 
                  mathematical concepts simple and accessible has inspired thousands of students.
                </p>
                <p>
                  Starting with just a single classroom and a handful of dedicated students, Prof. Bhaskar's 
                  vision was to create an institute where students don't just memorize formulas, but truly 
                  understand the beauty and logic of mathematics.
                </p>
                <p>
                  His teaching philosophy emphasizes concept clarity, practical application, and building 
                  confidence in students. This approach has helped countless students overcome their fear 
                  of mathematics and achieve remarkable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] p-8 md:p-10 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Mission
              </h3>
              <p className="text-white/90 leading-relaxed">
                To provide high-quality mathematics education that empowers students with deep 
                conceptual understanding, problem-solving skills, and the confidence to excel 
                in academics and beyond. We strive to make mathematics accessible and enjoyable 
                for every student.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#6D28D9] to-[#F97316] p-8 md:p-10 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Vision
              </h3>
              <p className="text-white/90 leading-relaxed">
                To be the leading mathematics education institute recognized for excellence in 
                teaching, student success, and innovative learning methodologies. We envision a 
                future where every student discovers their potential and achieves their academic 
                dreams through quality mathematics education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Teaching Philosophy
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              We believe in a student-centric approach that focuses on understanding over memorization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section - Our Journey */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Journey
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Key milestones in our 15-year journey of educational excellence.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-[#1E3A8A] to-[#6D28D9] mt-2"></div>
                    )}
                  </div>
                  <div className="pb-8 group-last:pb-0">
                    <div className="bg-[#F8FAFC] p-6 rounded-xl">
                      <p className="text-2xl font-bold text-[#1E3A8A] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {milestone.year}
                      </p>
                      <p className="text-[#111827]">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzI3NTc1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Right - Achievements */}
            <div className="order-1 lg:order-2">
              <h2 className="mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Achievements
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Over the years, we've achieved numerous milestones that reflect our commitment 
                to educational excellence.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <p className="text-[#111827]">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-3xl md:text-4xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Join Our Legacy of Success
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Become part of the Bhaskar Classes family and achieve your academic dreams with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" className="text-lg px-8 py-4 w-full sm:w-auto">
                Book Free Demo Class
              </Button>
            </Link>
            <Link to="/courses">
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 font-medium text-lg">
                Explore Courses
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}