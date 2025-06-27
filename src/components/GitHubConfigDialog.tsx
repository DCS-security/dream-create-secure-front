
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface GitHubConfigDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (config: { owner: string; repo: string; token: string }) => void;
}

const GitHubConfigDialog = ({ isOpen, onClose, onSave }: GitHubConfigDialogProps) => {
  const [config, setConfig] = useState({
    owner: '',
    repo: '',
    token: ''
  });

  const handleSave = () => {
    if (config.owner && config.repo && config.token) {
      onSave(config);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Configure GitHub Storage</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-start space-x-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium">Setup Instructions:</p>
              <ol className="list-decimal list-inside mt-1 space-y-1">
                <li>Create a GitHub repository</li>
                <li>Generate a Personal Access Token with repo permissions</li>
                <li>Enter the details below</li>
              </ol>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">GitHub Username/Org</label>
            <Input
              placeholder="your-username"
              value={config.owner}
              onChange={(e) => setConfig({...config, owner: e.target.value})}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Repository Name</label>
            <Input
              placeholder="blog-data"
              value={config.repo}
              onChange={(e) => setConfig({...config, repo: e.target.value})}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Personal Access Token</label>
            <Input
              type="password"
              placeholder="ghp_xxxxxxxxxxxx"
              value={config.token}
              onChange={(e) => setConfig({...config, token: e.target.value})}
            />
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleSave} 
              className="bg-cyber-500 hover:bg-cyber-600"
              disabled={!config.owner || !config.repo || !config.token}
            >
              Save Configuration
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GitHubConfigDialog;
