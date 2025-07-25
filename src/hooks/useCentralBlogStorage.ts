import { useState, useEffect } from 'react';
import { BlogPost } from './useBlogStorage';

interface BlogData {
  posts: BlogPost[];
  nextId: number;
}

export const useCentralBlogStorage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextId, setNextId] = useState(4);

  useEffect(() => {
    loadBlogData();
  }, []);

  const loadBlogData = async () => {
    setIsLoading(true);
    try {
      // First try to load from localStorage (for any local changes)
      const localData = localStorage.getItem('dcs_central_blog_data');
      if (localData) {
        const blogData: BlogData = JSON.parse(localData);
        setPosts(blogData.posts);
        setNextId(blogData.nextId);
      } else {
        // Load from the central JSON file
        const response = await fetch('/src/data/blogPosts.json');
        if (response.ok) {
          const blogData: BlogData = await response.json();
          setPosts(blogData.posts);
          setNextId(blogData.nextId);
          // Save to localStorage for local modifications
          localStorage.setItem('dcs_central_blog_data', JSON.stringify(blogData));
        }
      }
    } catch (error) {
      console.error('Error loading blog data:', error);
      // Fallback to default posts
      const defaultPosts: BlogPost[] = [
        {
          id: '1',
          title: 'The Future of AI in Cybersecurity - Chapter 1: Introduction',
          excerpt: 'Exploring how artificial intelligence is revolutionizing the cybersecurity landscape.',
          content: 'AI is transforming cybersecurity...',
          author: 'Deep Gada',
          date: '2024-01-15',
          category: 'AI Security',
          chapter: '1',
          slug: 'future-of-ai-cybersecurity-chapter-1'
        }
      ];
      setPosts(defaultPosts);
    } finally {
      setIsLoading(false);
    }
  };

  const saveBlogData = (newPosts: BlogPost[], newNextId: number) => {
    const blogData: BlogData = {
      posts: newPosts,
      nextId: newNextId
    };
    
    setPosts(newPosts);
    setNextId(newNextId);
    
    // Save to localStorage for immediate persistence
    localStorage.setItem('dcs_central_blog_data', JSON.stringify(blogData));
    
    console.log('Blog data updated:', blogData);
  };

  const addPost = (post: Omit<BlogPost, 'id' | 'date' | 'slug'>) => {
    const newPost: BlogPost = {
      ...post,
      id: nextId.toString(),
      date: new Date().toISOString().split('T')[0],
      slug: post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    };
    
    const newPosts = [newPost, ...posts];
    saveBlogData(newPosts, nextId + 1);
    return newPost;
  };

  const updatePost = (id: string, updatedPost: Partial<BlogPost>) => {
    const newPosts = posts.map(post => 
      post.id === id 
        ? { 
            ...post, 
            ...updatedPost, 
            slug: updatedPost.title ? 
              updatedPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 
              post.slug 
          }
        : post
    );
    saveBlogData(newPosts, nextId);
  };

  const deletePost = (id: string) => {
    const newPosts = posts.filter(post => post.id !== id);
    saveBlogData(newPosts, nextId);
  };

  const refreshPosts = () => {
    loadBlogData();
  };

  return {
    posts,
    isLoading,
    addPost,
    updatePost,
    deletePost,
    refreshPosts
  };
};