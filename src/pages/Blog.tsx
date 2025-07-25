
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useCentralBlogStorage } from '@/hooks/useCentralBlogStorage';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { posts, isLoading } = useCentralBlogStorage();

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-cyber-gradient">
          <div className="absolute inset-0 bg-cyber-glow"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
              DCS Blog
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Insights, tutorials, and thought leadership on AI-powered cybersecurity, 
              presented in easy-to-follow chapters.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search blog posts, categories, or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-border/50 bg-card/50 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">Loading posts...</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                  ))}
                </div>
                
                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-xl text-muted-foreground">
                      No blog posts found matching your search criteria.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
