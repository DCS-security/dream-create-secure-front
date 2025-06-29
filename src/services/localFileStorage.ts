
interface BlogPost {
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

class LocalFileStorageService {
  private basePath = '/for-blogs';
  private localStoragePrefix = 'blog_';

  async getPost(slug: string): Promise<BlogPost | null> {
    try {
      // First try to get from localStorage (for user-created/edited posts)
      const localPost = this.getFromLocalStorage(slug);
      if (localPost) {
        return localPost;
      }

      // Then try to fetch from actual files
      const response = await fetch(`${this.basePath}/${slug}.json`);
      if (!response.ok) {
        return null;
      }
      return await response.json();
    } catch (error) {
      console.error('Error loading post:', error);
      return null;
    }
  }

  async getAllPosts(): Promise<BlogPost[]> {
    try {
      const posts: BlogPost[] = [];
      
      // First, load all posts from localStorage
      const localPosts = this.getAllFromLocalStorage();
      posts.push(...localPosts);

      // Then try to load from actual files
      try {
        const response = await fetch(`${this.basePath}/manifest.json`);
        if (response.ok) {
          const manifest = await response.json();
          
          // Load each blog file that's not already in localStorage
          for (const slug of manifest.posts) {
            const existsInLocal = localPosts.some(p => p.slug === slug);
            if (!existsInLocal) {
              const post = await this.getPost(slug);
              if (post) {
                posts.push(post);
              }
            }
          }
        }
      } catch (error) {
        console.log('No manifest found or error loading it:', error);
      }

      // If no posts found, return default posts
      if (posts.length === 0) {
        return this.getDefaultPosts();
      }
      
      return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
      console.error('Error loading posts:', error);
      return this.getDefaultPosts();
    }
  }

  private getDefaultPosts(): BlogPost[] {
    return [
      {
        id: '1',
        title: 'The Future of AI in Cybersecurity - Chapter 1: Introduction',
        excerpt: 'Exploring how artificial intelligence is revolutionizing the cybersecurity landscape and what it means for businesses.',
        content: 'Artificial Intelligence is transforming cybersecurity in unprecedented ways. This comprehensive guide explores the current state and future potential of AI-powered security solutions. From automated threat detection to predictive analytics, AI is becoming an indispensable tool in the cybersecurity arsenal.\n\nIn this chapter, we will explore the fundamental concepts of AI in cybersecurity, including machine learning algorithms, neural networks, and their applications in threat detection and prevention. We will also discuss the challenges and opportunities that lie ahead as organizations increasingly rely on AI-powered security solutions.',
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
        content: 'Machine learning algorithms are becoming increasingly sophisticated in their ability to detect and prevent cyber threats. This chapter explores the most effective approaches including supervised learning for known threat patterns, unsupervised learning for anomaly detection, and reinforcement learning for adaptive security systems.\n\nWe will examine real-world case studies where machine learning has successfully identified previously unknown threats, and discuss the implementation challenges organizations face when deploying these advanced security systems.',
        author: 'Hitansh Shah',
        date: '2024-01-10',
        category: 'ML Security',
        chapter: '2',
        slug: 'machine-learning-threat-detection-chapter-2'
      }
    ];
  }

  async savePost(post: BlogPost): Promise<boolean> {
    try {
      // Save to localStorage for immediate persistence
      this.saveToLocalStorage(post);
      
      console.log(`Blog post "${post.title}" saved locally. File would be created at: ${this.basePath}/${post.slug}.json`);
      console.log('Post data:', JSON.stringify(post, null, 2));
      
      return true;
    } catch (error) {
      console.error('Error saving post:', error);
      return false;
    }
  }

  async deletePost(id: string): Promise<boolean> {
    try {
      // Find the post to get its slug
      const posts = await this.getAllPosts();
      const post = posts.find(p => p.id === id);
      if (!post) return false;
      
      // Remove from localStorage
      this.removeFromLocalStorage(post.slug);
      
      console.log(`Blog post "${post.title}" deleted locally. File would be deleted at: ${this.basePath}/${post.slug}.json`);
      
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      return false;
    }
  }

  // localStorage methods for persistence
  private saveToLocalStorage(post: BlogPost): void {
    const key = `${this.localStoragePrefix}${post.slug}`;
    localStorage.setItem(key, JSON.stringify(post));
    
    // Update the list of all post slugs
    this.updateLocalStorageIndex(post.slug, 'add');
  }

  private getFromLocalStorage(slug: string): BlogPost | null {
    try {
      const key = `${this.localStoragePrefix}${slug}`;
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting from localStorage:', error);
      return null;
    }
  }

  private removeFromLocalStorage(slug: string): void {
    const key = `${this.localStoragePrefix}${slug}`;
    localStorage.removeItem(key);
    
    // Update the list of all post slugs
    this.updateLocalStorageIndex(slug, 'remove');
  }

  private getAllFromLocalStorage(): BlogPost[] {
    try {
      const indexKey = `${this.localStoragePrefix}index`;
      const indexData = localStorage.getItem(indexKey);
      
      if (!indexData) return [];
      
      const slugs: string[] = JSON.parse(indexData);
      const posts: BlogPost[] = [];
      
      for (const slug of slugs) {
        const post = this.getFromLocalStorage(slug);
        if (post) {
          posts.push(post);
        }
      }
      
      return posts;
    } catch (error) {
      console.error('Error getting all from localStorage:', error);
      return [];
    }
  }

  private updateLocalStorageIndex(slug: string, action: 'add' | 'remove'): void {
    try {
      const indexKey = `${this.localStoragePrefix}index`;
      const indexData = localStorage.getItem(indexKey);
      let slugs: string[] = indexData ? JSON.parse(indexData) : [];
      
      if (action === 'add' && !slugs.includes(slug)) {
        slugs.unshift(slug);
      } else if (action === 'remove') {
        slugs = slugs.filter(s => s !== slug);
      }
      
      localStorage.setItem(indexKey, JSON.stringify(slugs));
    } catch (error) {
      console.error('Error updating localStorage index:', error);
    }
  }

  // Method to clear all localStorage data (for development/testing)
  clearAllLocalStorage(): void {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(this.localStoragePrefix)) {
        localStorage.removeItem(key);
      }
    });
  }
}

export default LocalFileStorageService;
