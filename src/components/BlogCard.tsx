
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, ArrowDown, ArrowUp } from 'lucide-react';
import { BlogPost } from '@/hooks/useBlogStorage';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
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
        
        {isExpanded && (
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold mb-2 text-cyber-400">Full Content:</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">
              {post.content}
            </p>
          </div>
        )}
        
        <Button 
          variant="ghost" 
          className="w-full group-hover:text-cyber-400 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              Show Less
              <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </>
          ) : (
            <>
              Read More
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
