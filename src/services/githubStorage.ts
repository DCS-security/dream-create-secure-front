
interface GitHubConfig {
  owner: string;
  repo: string;
  token: string;
  branch?: string;
}

interface GitHubFile {
  name: string;
  path: string;
  sha: string;
  content: string;
}

class GitHubStorageService {
  private config: GitHubConfig;
  private baseUrl = 'https://api.github.com';

  constructor(config: GitHubConfig) {
    this.config = {
      ...config,
      branch: config.branch || 'main'
    };
  }

  private getHeaders() {
    return {
      'Authorization': `token ${this.config.token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    };
  }

  async getFile(path: string): Promise<any> {
    try {
      const response = await fetch(
        `${this.baseUrl}/repos/${this.config.owner}/${this.config.repo}/contents/${path}`,
        { headers: this.getHeaders() }
      );
      
      if (response.status === 404) {
        return null;
      }
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
      }
      
      const data = await response.json();
      const content = JSON.parse(atob(data.content));
      return { content, sha: data.sha };
    } catch (error) {
      console.error('Error getting file from GitHub:', error);
      return null;
    }
  }

  async createOrUpdateFile(path: string, content: any, sha?: string): Promise<boolean> {
    try {
      const body = {
        message: `Update ${path}`,
        content: btoa(JSON.stringify(content, null, 2)),
        branch: this.config.branch,
        ...(sha && { sha })
      };

      const response = await fetch(
        `${this.baseUrl}/repos/${this.config.owner}/${this.config.repo}/contents/${path}`,
        {
          method: 'PUT',
          headers: this.getHeaders(),
          body: JSON.stringify(body)
        }
      );

      return response.ok;
    } catch (error) {
      console.error('Error updating file on GitHub:', error);
      return false;
    }
  }

  async listFiles(path: string): Promise<GitHubFile[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/repos/${this.config.owner}/${this.config.repo}/contents/${path}`,
        { headers: this.getHeaders() }
      );
      
      if (!response.ok) {
        return [];
      }
      
      const files = await response.json();
      return Array.isArray(files) ? files : [];
    } catch (error) {
      console.error('Error listing files from GitHub:', error);
      return [];
    }
  }
}

export default GitHubStorageService;
