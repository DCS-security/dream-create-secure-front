
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useBlogStorage } from '@/hooks/useBlogStorage';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { posts } = useBlogStorage();

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
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
                  placeholder="Search blog posts, categories, or topics..."
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="group transition-all duration-300 border-border/50 hover:border-cyber-400/30 bg-card/50 backdrop-blur-sm animate-fade-in cursor-pointer hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-cyber-500/10 text-cyber-400 rounded-full text-sm border border-cyber-500/20">
                        Chapter {post.chapter}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-cyber-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:text-cyber-400 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  No blog posts found matching your search criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
