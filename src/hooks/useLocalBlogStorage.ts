
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
      // First try to load from individual files in localStorage
      const storagePosts = await fileService.getAllPostsFromStorage();
      setPosts(storagePosts);
      
      // Then try to load from actual files (for future file system integration)
      const filePosts = await fileService.getAllPosts();
      if (filePosts.length > 0) {
        setPosts(filePosts);
      }
    } catch (error) {
      console.error('Error loading posts:', error);
      // Fallback to default posts
      const storagePosts = await fileService.getAllPostsFromStorage();
      setPosts(storagePosts);
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
      setPosts(prevPosts => [newPost, ...prevPosts]);
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
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === id ? updatedFullPost : post
        )
      );
    }
  };

  const deletePost = async (id: string) => {
    const success = await fileService.deletePost(id);
    if (success) {
      setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
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
