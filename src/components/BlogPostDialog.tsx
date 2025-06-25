
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/hooks/useBlogStorage';

interface BlogPostDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (post: Omit<BlogPost, 'id' | 'date' | 'slug'>) => void;
  onUpdate?: (id: string, post: Partial<BlogPost>) => void;
  post?: BlogPost;
  mode: 'create' | 'edit';
}

const BlogPostDialog = ({ isOpen, onClose, onSave, onUpdate, post, mode }: BlogPostDialogProps) => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    chapter: ''
  });

  // Reset form when dialog opens/closes or post changes
  useEffect(() => {
    if (isOpen) {
      if (mode === 'edit' && post) {
        // Pre-populate form with existing blog post data
        setFormData({
          title: post.title || '',
          excerpt: post.excerpt || '',
          content: post.content || '',
          author: post.author || '',
          category: post.category || '',
          chapter: post.chapter || ''
        });
      } else {
        // Reset form for new post
        setFormData({
          title: '',
          excerpt: '',
          content: '',
          author: '',
          category: '',
          chapter: ''
        });
      }
    }
  }, [isOpen, mode, post]);

  const handleSave = () => {
    if (mode === 'create') {
      onSave(formData);
    } else if (mode === 'edit' && post && onUpdate) {
      onUpdate(post.id, formData);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === 'create' ? 'Create New Blog Post' : `Edit Blog Post: ${post?.title || ''}`}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Title</label>
              <Input
                placeholder="Blog post title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Chapter Number</label>
              <Input
                type="number"
                placeholder="1"
                value={formData.chapter}
                onChange={(e) => setFormData({...formData, chapter: e.target.value})}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Author</label>
              <Input
                placeholder="Author name"
                value={formData.author}
                onChange={(e) => setFormData({...formData, author: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Input
                placeholder="AI Security, ML Security, etc."
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Excerpt</label>
            <Textarea
              placeholder="Brief description of the blog post"
              value={formData.excerpt}
              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              rows={3}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Content</label>
            <Textarea
              placeholder="Full blog post content"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              rows={10}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-cyber-500 hover:bg-cyber-600">
              {mode === 'create' ? 'Create Post' : 'Update Post'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogPostDialog;
