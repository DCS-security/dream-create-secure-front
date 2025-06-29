
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

  async getPost(slug: string): Promise<BlogPost | null> {
    try {
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
      // Try to load from manifest file that lists all blog files
      const response = await fetch(`${this.basePath}/manifest.json`);
      if (!response.ok) {
        console.log('No manifest found, using default posts');
        return this.getDefaultPosts();
      }
      
      const manifest = await response.json();
      const posts: BlogPost[] = [];
      
      // Load each blog file individually
      for (const slug of manifest.posts) {
        const post = await this.getPost(slug);
        if (post) {
          posts.push(post);
        }
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
      // Create the blog post file
      await this.writeFile(`${this.basePath}/${post.slug}.json`, JSON.stringify(post, null, 2));
      
      // Update the manifest
      await this.updateManifest(post.slug);
      
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
      
      // Delete the blog post file
      await this.deleteFile(`${this.basePath}/${post.slug}.json`);
      
      // Update manifest to remove the post
      await this.removeFromManifest(post.slug);
      
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      return false;
    }
  }

  private async updateManifest(slug: string): Promise<void> {
    try {
      let manifest = { posts: [] };
      
      try {
        const response = await fetch(`${this.basePath}/manifest.json`);
        if (response.ok) {
          manifest = await response.json();
        }
      } catch (error) {
        console.log('Creating new manifest file');
      }
      
      if (!manifest.posts.includes(slug)) {
        manifest.posts.unshift(slug);
      }
      
      await this.writeFile(`${this.basePath}/manifest.json`, JSON.stringify(manifest, null, 2));
    } catch (error) {
      console.error('Error updating manifest:', error);
    }
  }

  private async removeFromManifest(slug: string): Promise<void> {
    try {
      const response = await fetch(`${this.basePath}/manifest.json`);
      if (response.ok) {
        const manifest = await response.json();
        manifest.posts = manifest.posts.filter((s: string) => s !== slug);
        await this.writeFile(`${this.basePath}/manifest.json`, JSON.stringify(manifest, null, 2));
      }
    } catch (error) {
      console.error('Error removing from manifest:', error);
    }
  }

  private async writeFile(path: string, content: string): Promise<void> {
    // In a browser environment, we can't directly write files to the file system
    // This would need to be handled by a backend service or file system API
    // For now, we'll simulate this by using a service worker or local storage as fallback
    
    // Store in localStorage as a fallback for development
    const key = `file_${path.replace(/[^a-zA-Z0-9]/g, '_')}`;
    localStorage.setItem(key, content);
    
    console.log(`File would be created at: ${path}`);
    console.log('Content:', content);
  }

  private async deleteFile(path: string): Promise<void> {
    // In a browser environment, we can't directly delete files from the file system
    // This would need to be handled by a backend service or file system API
    
    // Remove from localStorage as a fallback for development
    const key = `file_${path.replace(/[^a-zA-Z0-9]/g, '_')}`;
    localStorage.removeItem(key);
    
    console.log(`File would be deleted at: ${path}`);
  }

  // For development, load from localStorage if files don't exist
  async getAllPostsFromStorage(): Promise<BlogPost[]> {
    try {
      // Try to get manifest from localStorage first
      const manifestKey = `file_${`${this.basePath}/manifest.json`.replace(/[^a-zA-Z0-9]/g, '_')}`;
      const manifestData = localStorage.getItem(manifestKey);
      
      if (!manifestData) {
        return this.getDefaultPosts();
      }
      
      const manifest = JSON.parse(manifestData);
      const posts: BlogPost[] = [];
      
      for (const slug of manifest.posts) {
        const fileKey = `file_${`${this.basePath}/${slug}.json`.replace(/[^a-zA-Z0-9]/g, '_')}`;
        const postData = localStorage.getItem(fileKey);
        if (postData) {
          posts.push(JSON.parse(postData));
        }
      }
      
      return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
      console.error('Error loading posts from storage:', error);
      return this.getDefaultPosts();
    }
  }
}

export default LocalFileStorageService;
