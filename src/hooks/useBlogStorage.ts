
import { useState, useEffect } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  chapter: string;
  date: string;
  slug: string;
}

export const useBlogStorage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
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
        },
        {
          id: '2',
          title: 'Machine Learning Threat Detection - Chapter 2: Advanced Algorithms',
          excerpt: 'Deep dive into machine learning algorithms that can identify and prevent sophisticated cyber threats.',
          content: 'Machine learning algorithms are becoming increasingly sophisticated in their ability to detect and prevent cyber threats. This chapter explores the most effective approaches.',
          author: 'Hitansh Shah',
          date: '2024-01-10',
          category: 'ML Security',
          chapter: '2',
          slug: 'machine-learning-threat-detection-chapter-2'
        },
        {
          id: '3',
          title: 'Zero Trust Architecture - Chapter 3: Implementation Guide',
          excerpt: 'A comprehensive guide to implementing zero trust security architecture in modern organizations.',
          content: 'Zero Trust Architecture represents a fundamental shift in cybersecurity strategy. This guide provides practical steps for implementation.',
          author: 'DCS Team',
          date: '2024-01-05',
          category: 'Security Architecture',
          chapter: '3',
          slug: 'zero-trust-architecture-chapter-3'
        }
      ];
      setPosts(samplePosts);
      localStorage.setItem('dcs_blog_posts', JSON.stringify(samplePosts));
    }
  }, []);

  const savePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('dcs_blog_posts', JSON.stringify(newPosts));
  };

  const addPost = (post: Omit<BlogPost, 'id' | 'date' | 'slug'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      slug: post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    };
    const newPosts = [newPost, ...posts];
    savePosts(newPosts);
    return newPost;
  };

  const updatePost = (id: string, updatedPost: Partial<BlogPost>) => {
    const newPosts = posts.map(post => 
      post.id === id 
        ? { ...post, ...updatedPost, slug: updatedPost.title ? updatedPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : post.slug }
        : post
    );
    savePosts(newPosts);
  };

  const deletePost = (id: string) => {
    const newPosts = posts.filter(post => post.id !== id);
    savePosts(newPosts);
  };

  return {
    posts,
    addPost,
    updatePost,
    deletePost
  };
};
