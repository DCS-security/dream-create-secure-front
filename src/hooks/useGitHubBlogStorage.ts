
import { useState, useEffect } from 'react';
import GitHubStorageService from '@/services/githubStorage';
import { BlogPost } from './useBlogStorage';

const GITHUB_CONFIG = {
  owner: '', // You'll need to set this
  repo: '', // You'll need to set this
  token: '', // You'll need to set this
};

export const useGitHubBlogStorage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [githubService, setGithubService] = useState<GitHubStorageService | null>(null);

  useEffect(() => {
    // Check if GitHub config is available
    const savedConfig = localStorage.getItem('github_config');
    if (savedConfig) {
      const config = JSON.parse(savedConfig);
      const service = new GitHubStorageService(config);
      setGithubService(service);
      loadPosts(service);
    } else {
      // Fallback to localStorage if GitHub not configured
      loadLocalPosts();
    }
  }, []);

  const loadPosts = async (service: GitHubStorageService) => {
    setIsLoading(true);
    try {
      const files = await service.listFiles('data/posts');
      const loadedPosts: BlogPost[] = [];

      for (const file of files) {
        if (file.name.endsWith('.json')) {
          const fileData = await service.getFile(file.path);
          if (fileData?.content) {
            loadedPosts.push(fileData.content);
          }
        }
      }

      loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setPosts(loadedPosts);
    } catch (error) {
      console.error('Error loading posts from GitHub:', error);
      // Fallback to localStorage
      loadLocalPosts();
    } finally {
      setIsLoading(false);
    }
  };

  const loadLocalPosts = () => {
    const savedPosts = localStorage.getItem('dcs_blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Initialize with sample posts
      const samplePosts: BlogPost[] = [
        {
          id: '1',
          title: 'The Future of AI in Cybersecurity - Chapter 1: Introduction',
          excerpt: 'Exploring how artificial intelligence is revolutionizing the cybersecurity landscape and what it means for businesses.',
          content: 'Artificial Intelligence is transforming cybersecurity in unprecedented ways. This comprehensive guide explores the current state and future potential of AI-powered security solutions.',
          author: 'Deep Gada',
          date: '2024-01-15',
          category: 'AI Security',
          chapter: '1',
          slug: 'future-of-ai-cybersecurity-chapter-1'
        }
      ];
      setPosts(samplePosts);
      localStorage.setItem('dcs_blog_posts', JSON.stringify(samplePosts));
    }
    setIsLoading(false);
  };

  const savePosts = async (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('dcs_blog_posts', JSON.stringify(newPosts));

    if (githubService) {
      // Save each post as individual JSON file
      for (const post of newPosts) {
        const filename = `data/posts/${post.slug}.json`;
        await githubService.createOrUpdateFile(filename, post);
      }
    }
  };

  const addPost = async (post: Omit<BlogPost, 'id' | 'date' | 'slug'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      slug: post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    };
    
    const newPosts = [newPost, ...posts];
    await savePosts(newPosts);
    return newPost;
  };

  const updatePost = async (id: string, updatedPost: Partial<BlogPost>) => {
    const newPosts = posts.map(post => 
      post.id === id 
        ? { ...post, ...updatedPost, slug: updatedPost.title ? updatedPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : post.slug }
        : post
    );
    await savePosts(newPosts);
  };

  const deletePost = async (id: string) => {
    const newPosts = posts.filter(post => post.id !== id);
    await savePosts(newPosts);
  };

  const configureGitHub = (config: { owner: string; repo: string; token: string }) => {
    localStorage.setItem('github_config', JSON.stringify(config));
    const service = new GitHubStorageService(config);
    setGithubService(service);
    loadPosts(service);
  };

  return {
    posts,
    isLoading,
    addPost,
    updatePost,
    deletePost,
    configureGitHub,
    isGitHubConfigured: !!githubService
  };
};
