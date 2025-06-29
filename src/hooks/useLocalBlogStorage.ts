
import { useState, useEffect } from 'react';
import LocalFileStorageService from '@/services/localFileStorage';
import { BlogPost } from './useBlogStorage';

export const useLocalBlogStorage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fileService] = useState(() => new LocalFileStorageService());

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setIsLoading(true);
    try {
      // First try to load from localStorage (for immediate display)
      const savedPosts = localStorage.getItem('dcs_blog_posts');
      if (savedPosts) {
        setPosts(JSON.parse(savedPosts));
      }
      
      // Then try to load from files (for updated content)
      const filePosts = await fileService.getAllPosts();
      if (filePosts.length > 0) {
        setPosts(filePosts);
        localStorage.setItem('dcs_blog_posts', JSON.stringify(filePosts));
      }
    } catch (error) {
      console.error('Error loading posts:', error);
      // Fallback to localStorage
      const savedPosts = localStorage.getItem('dcs_blog_posts');
      if (savedPosts) {
        setPosts(JSON.parse(savedPosts));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const addPost = async (post: Omit<BlogPost, 'id' | 'date' | 'slug'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      slug: post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    };
    
    const success = await fileService.savePost(newPost);
    if (success) {
      const newPosts = [newPost, ...posts];
      setPosts(newPosts);
    }
    return newPost;
  };

  const updatePost = async (id: string, updatedPost: Partial<BlogPost>) => {
    const postToUpdate = posts.find(p => p.id === id);
    if (!postToUpdate) return;

    const updatedFullPost: BlogPost = {
      ...postToUpdate,
      ...updatedPost,
      slug: updatedPost.title ? 
        updatedPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 
        postToUpdate.slug
    };

    const success = await fileService.savePost(updatedFullPost);
    if (success) {
      const newPosts = posts.map(post => 
        post.id === id ? updatedFullPost : post
      );
      setPosts(newPosts);
    }
  };

  const deletePost = async (id: string) => {
    const success = await fileService.deletePost(id);
    if (success) {
      const newPosts = posts.filter(post => post.id !== id);
      setPosts(newPosts);
    }
  };

  return {
    posts,
    isLoading,
    addPost,
    updatePost,
    deletePost,
    refreshPosts: loadPosts
  };
};
