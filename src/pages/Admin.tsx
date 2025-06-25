import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Edit, Plus, Trash2, Eye, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useBlogStorage } from '@/hooks/useBlogStorage';
import { useContentStorage } from '@/hooks/useContentStorage';
import BlogPostDialog from '@/components/BlogPostDialog';
import ContentEditDialog from '@/components/ContentEditDialog';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [blogDialogOpen, setBlogDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [contentDialogOpen, setContentDialogOpen] = useState(false);
  const [editingSection, setEditingSection] = useState('');
  const { toast } = useToast();
  const { posts, addPost, updatePost, deletePost } = useBlogStorage();
  const { sections } = useContentStorage();

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    console.log('Login attempt:', credentials);
    
    if (credentials.username === 'admin' && credentials.password === 'Hit@1703') {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel!",
      });
    } else {
      toast({
        title: "Login Failed", 
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const handleBlogCreate = (postData: any) => {
    addPost(postData);
    toast({
      title: "Blog Post Created",
      description: "Your blog post has been published successfully!",
    });
  };

  const handleBlogUpdate = (id: string, postData: any) => {
    updatePost(id, postData);
    toast({
      title: "Blog Post Updated",
      description: "Your blog post has been updated successfully!",
    });
    setEditingPost(null);
  };

  const handleBlogDelete = (id: string) => {
    deletePost(id);
    toast({
      title: "Blog Post Deleted",
      description: "The blog post has been deleted successfully!",
    });
  };

  const handleEditContent = (sectionTitle: string) => {
    setEditingSection(sectionTitle);
    setContentDialogOpen(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-cyber-gradient flex items-center justify-center">
        <div className="absolute inset-0 bg-cyber-glow"></div>
        <Card className="relative z-10 w-full max-w-md mx-4 bg-card/90 backdrop-blur-sm border border-cyber-400/30">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-cyber-500/10 rounded-lg">
                <Shield className="h-8 w-8 text-cyber-500" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-cyber-400">
              Admin Access
            </CardTitle>
            <CardDescription>
              Enter your admin credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  onKeyPress={handleKeyPress}
                  className="border-border/50 bg-card/50"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  onKeyPress={handleKeyPress}
                  className="border-border/50 bg-card/50"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-cyber-500 hover:bg-cyber-600 text-white"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your website content, blog posts, and settings
          </p>
        </div>

        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="content" className="flex items-center space-x-2">
              <Edit className="h-4 w-4" />
              <span>Content Management</span>
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Blog Management</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Hero Section', description: 'Edit main banner content' },
                { title: 'About Section', description: 'Update about us information' },
                { title: 'Services', description: 'Manage service offerings' },
                { title: 'Features', description: 'Edit solution features' },
                { title: 'Contact Info', description: 'Update contact details' },
                { title: 'Footer', description: 'Manage footer content' }
              ].map((section) => {
                const sectionData = sections[section.title];
                return (
                  <Card key={section.title} className="group hover:border-cyber-400/30 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {section.title}
                        <Edit className="h-5 w-5 text-cyber-500" />
                      </CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                      {sectionData && (
                        <div className="text-xs text-muted-foreground mt-2">
                          <p><strong>Current Title:</strong> {sectionData.title}</p>
                          <p><strong>Description:</strong> {sectionData.description.substring(0, 50)}...</p>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleEditContent(section.title)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Edit Content
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="blog">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Blog Management
                    <Button 
                      onClick={() => setBlogDialogOpen(true)}
                      className="bg-cyber-500 hover:bg-cyber-600"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      New Post
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    Manage your blog posts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {posts.map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold">{post.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            Chapter {post.chapter} • {post.category} • {new Date(post.date).toLocaleDateString()}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">{post.excerpt}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setEditingPost(post);
                              setBlogDialogOpen(true);
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleBlogDelete(post.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {posts.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        No blog posts yet. Create your first post!
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            
            <Card>
              <CardHeader>
                <CardTitle>Website Settings</CardTitle>
                <CardDescription>
                  Configure global website settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Site Title</label>
                  <Input defaultValue="DCS - Dream. Create. Secure." />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Site Description</label>
                  <Input defaultValue="AI-Powered Cybersecurity Solutions" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Contact Email</label>
                  <Input defaultValue="info@devanshcybersec.in" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Contact Phone</label>
                  <Input defaultValue="+91 9082678303" />
                </div>
                <Button className="bg-cyber-500 hover:bg-cyber-600">
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <BlogPostDialog
          isOpen={blogDialogOpen}
          onClose={() => {
            setBlogDialogOpen(false);
            setEditingPost(null);
          }}
          onSave={handleBlogCreate}
          onUpdate={handleBlogUpdate}
          post={editingPost}
          mode={editingPost ? 'edit' : 'create'}
        />

        <ContentEditDialog
          isOpen={contentDialogOpen}
          onClose={() => setContentDialogOpen(false)}
          sectionTitle={editingSection}
        />
      </div>
    </div>
  );
};

export default Admin;
