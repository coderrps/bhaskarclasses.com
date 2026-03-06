import { CourseCard } from "../components/CourseCard";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/Button";

export function Courses() {
  const courseCategories = [
    {
      category: "School Maths",
      courses: [
        {
          title: "Class 9 Maths",
          description: "Build a strong foundation with comprehensive coverage of NCERT curriculum, practice problems, and conceptual clarity.",
          duration: "12 Months",
          //students: "500+ Students",
          level: "Foundation",
          image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzI3MjM1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          title: "Class 10 Maths",
          description: "Ace your board exams with focused preparation, regular tests, and comprehensive doubt-solving sessions.",
          duration: "12 Months",
         // students: "650+ Students",
          level: "Board Exam",
          image: "https://images.unsplash.com/photo-1758685734312-5134968399a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGJsYWNrYm9hcmQlMjBlcXVhdGlvbnN8ZW58MXx8fHwxNzcyODA0NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          title: "Class 11 Maths",
          description: "Master advanced topics with focus on calculus, trigonometry, and analytical geometry for strong basics.",
          duration: "12 Months",
          //students: "480+ Students",
          level: "Intermediate",
          image: "https://images.unsplash.com/photo-1758685848352-c527c32b2054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwbWF0aGVtYXRpY3MlMjBjbGFzc3xlbnwxfHx8fDE3NzI4MDQ2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          title: "Class 12 Maths",
          description: "Complete board exam preparation with comprehensive coverage of calculus, algebra, probability and more.",
          duration: "12 Months",
         // students: "550+ Students",
          level: "Board Exam",
          image: "https://images.unsplash.com/photo-1683127983818-208f46227c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyeSUyMG1hdGhlbWF0aWNzJTIwdG9vbHN8ZW58MXx8fHwxNzcyODA0NTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
    {
      category: "Competitive Exams",
      courses: [
        {
          title: "IIT-JEE Maths",
          description: "Crack IIT-JEE with advanced problem-solving techniques, regular mock tests, and previous year question analysis.",
          duration: "24 Months",
         // students: "400+ Students",
          level: "Advanced",
          image: "https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzI3NjU0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
    {
      category: "Higher Education",
      courses: [
        {
          title: "BTech Maths",
          description: "Master engineering mathematics including differential equations, linear algebra, numerical methods and more.",
          duration: "8 Months",
        //  students: "320+ Students",
          level: "Engineering",
          image: "https://images.unsplash.com/photo-1761821170104-ccd3e3e21318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnQlMjBjYWxjdWxhdG9yfGVufDF8fHx8MTc3MjgwNDYxMXww&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
    {
      category: "International Curriculum",
      courses: [
        {
          title: "IB Maths",
          description: "Comprehensive IB curriculum coverage with focus on internal assessments and exam preparation.",
          duration: "18 Months",
          //students: "180+ Students",
          level: "International",
          image: "https://images.unsplash.com/photo-1731983568664-9c1d8a87e7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwY3VycmljdWx1bSUyMGJvb2tzfGVufDF8fHx8MTc3MjgwNDYxMXww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          title: "USA Maths Tutor",
          description: "Aligned with Common Core and state standards for students studying in American curriculum schools.",
          duration: "12 Months",
         // students: "150+ Students",
          level: "International",
          image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzI3MjM1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
  ];

  const courseFeatures = [
    "Personalized learning plans tailored to each student",
    "Small batch sizes for individual attention",
    "Regular assessments and progress tracking",
    "Comprehensive study material and practice sheets",
    "Doubt clearing sessions and mentorship",
    "Mock tests and exam preparation strategies",
    "Flexible class timings and online options",
    "Recorded sessions for revision",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Courses
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Explore our comprehensive range of mathematics courses designed for students 
              from Class 9 to engineering level, including international curricula.
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      {courseCategories.map((categoryGroup, groupIndex) => (
        <section key={groupIndex} className={`py-16 md:py-24 ${groupIndex % 2 === 0 ? 'bg-[#F8FAFC]' : 'bg-white'}`}>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {categoryGroup.category}
              </h2>
            </div>

            <div className={`grid ${categoryGroup.courses.length >= 3 ? 'md:grid-cols-2 lg:grid-cols-3' : categoryGroup.courses.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-8`}>
              {categoryGroup.courses.map((course, courseIndex) => (
                <CourseCard key={courseIndex} {...course} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Course Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512238972088-8acb84db0771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmllbmNlZCUyMHRlYWNoZXIlMjBtZW50b3Jpbmd8ZW58MXx8fHwxNzcyODA1MDE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Teacher mentoring student"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/30 to-transparent rounded-2xl"></div>
            </div>

            {/* Right - Features */}
            <div>
              <h2 className="mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What's Included in Our Courses?
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Every course at Bhaskar Classes comes with comprehensive features designed 
                to ensure your academic success.
              </p>
              <div className="space-y-4">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <p className="text-[#111827]">{feature}</p>
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
            Not Sure Which Course is Right for You?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book a free demo class and let our expert counselors guide you to the perfect course 
            based on your academic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" className="text-lg px-8 py-4 w-full sm:w-auto">
                Book Free Demo Class
              </Button>
            </Link>
            <a href="tel:+919821186101">
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 font-medium text-lg">
                Call Us Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
