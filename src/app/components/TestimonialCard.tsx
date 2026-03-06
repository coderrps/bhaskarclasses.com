import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export function TestimonialCard({ name, role, content, rating, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-6 md:p-8 relative">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-16 h-16 text-[#1E3A8A]" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "fill-[#F97316] text-[#F97316]" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-[#111827] mb-6 leading-relaxed relative z-10">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-[#111827]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {name}
          </p>
          <p className="text-sm text-[#6B7280]">{role}</p>
        </div>
      </div>
    </div>
  );
}
