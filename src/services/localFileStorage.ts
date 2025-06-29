
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
  private basePath = '/data/posts';

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
      // For now, we'll use a manifest file to list all posts
      const response = await fetch(`${this.basePath}/manifest.json`);
      if (!response.ok) {
        return this.getDefaultPosts();
      }
      
      const manifest = await response.json();
      const posts: BlogPost[] = [];
      
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
      }
    ];
  }

  // Note: These methods will need to be implemented with a backend API
  // For now, they'll use localStorage as fallback
  async savePost(post: BlogPost): Promise<boolean> {
    try {
      // In a real implementation, this would save to the file system
      // For now, we'll use localStorage as a fallback
      const posts = await this.getAllPosts();
      const existingIndex = posts.findIndex(p => p.id === post.id);
      
      if (existingIndex >= 0) {
        posts[existingIndex] = post;
      } else {
        posts.unshift(post);
      }
      
      localStorage.setItem('dcs_blog_posts', JSON.stringify(posts));
      return true;
    } catch (error) {
      console.error('Error saving post:', error);
      return false;
    }
  }

  async deletePost(id: string): Promise<boolean> {
    try {
      const posts = await this.getAllPosts();
      const filteredPosts = posts.filter(p => p.id !== id);
      localStorage.setItem('dcs_blog_posts', JSON.stringify(filteredPosts));
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      return false;
    }
  }
}

export default LocalFileStorageService;
