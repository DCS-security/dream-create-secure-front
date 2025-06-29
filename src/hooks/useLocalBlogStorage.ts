
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
      const allPosts = await fileService.getAllPosts();
      setPosts(allPosts);
    } catch (error) {
      console.error('Error loading posts:', error);
      setPosts([]);
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
      // Reload all posts to get the updated list
      await loadPosts();
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
      // Reload all posts to get the updated list
      await loadPosts();
    }
  };

  const deletePost = async (id: string) => {
    const success = await fileService.deletePost(id);
    if (success) {
      // Reload all posts to get the updated list
      await loadPosts();
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
