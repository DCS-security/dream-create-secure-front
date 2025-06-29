
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
  private basePath = '/data/blogs';

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
        content: 'Artificial Intelligence is transforming cybersecurity in unprecedented ways. This comprehensive guide explores the current state and future potential of AI-powered security solutions. From automated threat detection to predictive analytics, AI is becoming an indispensable tool in the cybersecurity arsenal.',
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
        content: 'Machine learning algorithms are becoming increasingly sophisticated in their ability to detect and prevent cyber threats. This chapter explores the most effective approaches including supervised learning for known threat patterns, unsupervised learning for anomaly detection, and reinforcement learning for adaptive security systems.',
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
      // In a real implementation, this would save individual files
      // For now, we'll simulate by updating localStorage with individual entries
      localStorage.setItem(`dcs_blog_${post.slug}`, JSON.stringify(post));
      
      // Update the manifest
      const existingManifest = localStorage.getItem('dcs_blog_manifest');
      let manifest = existingManifest ? JSON.parse(existingManifest) : { posts: [] };
      
      if (!manifest.posts.includes(post.slug)) {
        manifest.posts.unshift(post.slug);
      }
      
      localStorage.setItem('dcs_blog_manifest', JSON.stringify(manifest));
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
      localStorage.removeItem(`dcs_blog_${post.slug}`);
      
      // Update manifest
      const existingManifest = localStorage.getItem('dcs_blog_manifest');
      if (existingManifest) {
        const manifest = JSON.parse(existingManifest);
        manifest.posts = manifest.posts.filter((slug: string) => slug !== post.slug);
        localStorage.setItem('dcs_blog_manifest', JSON.stringify(manifest));
      }
      
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      return false;
    }
  }

  // Override getAllPosts to check localStorage first for individual files
  async getAllPostsFromStorage(): Promise<BlogPost[]> {
    try {
      const manifest = localStorage.getItem('dcs_blog_manifest');
      if (!manifest) {
        return this.getDefaultPosts();
      }
      
      const { posts: slugs } = JSON.parse(manifest);
      const posts: BlogPost[] = [];
      
      for (const slug of slugs) {
        const postData = localStorage.getItem(`dcs_blog_${slug}`);
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
