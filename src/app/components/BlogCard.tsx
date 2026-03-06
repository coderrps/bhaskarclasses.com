import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  date?: string;
}

export function BlogCard({ title, description, image, date }: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        {date && (
          <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-3">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        )}
        
        <h3 className="mb-3 text-xl group-hover:text-[#1E3A8A] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h3>
        
        <p className="text-[#6B7280] mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <button className="inline-flex items-center gap-2 text-[#1E3A8A] font-medium hover:text-[#F97316] transition-colors text-sm group/link">
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
