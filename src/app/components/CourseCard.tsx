import { BookOpen, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  image: string;
}

export function CourseCard({ title, description, duration, students, level, image }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#F8FAFC]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-[#1E3A8A] text-white px-3 py-1 rounded-full text-sm">
          {level}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h3>
        <p className="text-[#6B7280] mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-4 text-sm text-[#6B7280]">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-[#1E3A8A] font-medium hover:text-[#F97316] transition-colors group/link"
        >
          <BookOpen className="w-5 h-5" />
          <span>Enroll Now</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
