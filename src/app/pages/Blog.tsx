import { Calendar, User, ArrowRight, Clock, Search } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts: BlogPost[] = [
    {
      title: "10 Proven Tips to Master Calculus",
      excerpt: "Discover effective strategies to understand and excel in calculus, from basic concepts to advanced problem-solving techniques.",
      author: "Prof. Rajesh Bhaskar",
      date: "March 1, 2026",
      readTime: "5 min read",
      category: "Study Tips",
      image: "https://images.unsplash.com/photo-1754304342447-82dabf632a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMHN0dWR5JTIwdGlwc3xlbnwxfHx8fDE3NzI4MDQ3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "How to Prepare for IIT-JEE Mathematics",
      excerpt: "A comprehensive guide to crack IIT-JEE mathematics section with smart preparation strategies and time management tips.",
      author: "Dr. Priya Sharma",
      date: "February 28, 2026",
      readTime: "8 min read",
      category: "Exam Preparation",
      image: "https://images.unsplash.com/photo-1758525861622-f4e7ac86a2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGFtJTIwcHJlcGFyYXRpb24lMjBzdWNjZXNzfGVufDF8fHx8MTc3MjgwNDcwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Understanding Trigonometry: A Beginner's Guide",
      excerpt: "Learn the fundamentals of trigonometry with simple explanations and practical examples that make complex concepts easy.",
      author: "Prof. Amit Kumar",
      date: "February 25, 2026",
      readTime: "6 min read",
      category: "Concepts",
      image: "https://images.unsplash.com/photo-1683127983818-208f46227c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyeSUyMG1hdGhlbWF0aWNzJTIwdG9vbHN8ZW58MXx8fHwxNzcyODA0NTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Top 5 Common Mistakes in Algebra",
      excerpt: "Identify and avoid the most common algebraic errors that students make, with solutions and prevention strategies.",
      author: "Prof. Rajesh Bhaskar",
      date: "February 22, 2026",
      readTime: "4 min read",
      category: "Common Mistakes",
      image: "https://images.unsplash.com/photo-1758685734312-5134968399a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGJsYWNrYm9hcmQlMjBlcXVhdGlvbnN8ZW58MXx8fHwxNzcyODA0NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Board Exam Success: Mathematics Strategy",
      excerpt: "Essential tips and strategies to score high marks in Class 10 and Class 12 board mathematics examinations.",
      author: "Dr. Priya Sharma",
      date: "February 20, 2026",
      readTime: "7 min read",
      category: "Exam Preparation",
      image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzI3MjM1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "The Beauty of Mathematical Patterns",
      excerpt: "Explore fascinating patterns in mathematics and discover how they appear in nature, art, and everyday life.",
      author: "Prof. Amit Kumar",
      date: "February 18, 2026",
      readTime: "5 min read",
      category: "Concepts",
      image: "https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzI3NjU0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const categories = ["All", "Study Tips", "Exam Preparation", "Concepts", "Common Mistakes"];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Mathematics Blog
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Insights, tips, and strategies to excel in mathematics. Learn from our expert 
              teachers and stay updated with the latest in math education.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316] text-[#111827] shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-40">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-[#F8FAFC] text-[#111827] hover:bg-[#1E3A8A] hover:text-white transition-colors whitespace-nowrap font-medium text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#F97316] text-white rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="px-3 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {blogPosts[0].title}
                </h2>
                <p className="text-[#6B7280] mb-6 leading-relaxed text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#6B7280] mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-[#1E3A8A] font-medium hover:text-[#F97316] transition-colors group">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Latest Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#1E3A8A] text-white rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="mb-3 text-xl group-hover:text-[#1E3A8A] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {post.title}
                  </h3>
                  <p className="text-[#6B7280] mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center gap-2 text-[#1E3A8A] font-medium hover:text-[#F97316] transition-colors text-sm group/link">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-[#1E3A8A] text-white rounded-lg hover:bg-[#1e40af] transition-colors font-medium">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Get Math Tips in Your Inbox
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive weekly mathematics tips, study strategies, 
              and exam preparation guides.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316] text-[#111827]"
              />
              <button className="px-6 py-3 bg-[#F97316] text-white rounded-lg hover:bg-[#ea6c0f] transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}