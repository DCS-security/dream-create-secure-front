
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useContentStorage } from '@/hooks/useContentStorage';

interface ContentEditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  sectionTitle: string;
}

const ContentEditDialog = ({ isOpen, onClose, sectionTitle }: ContentEditDialogProps) => {
  const { getSection, updateSection } = useContentStorage();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && sectionTitle) {
      const existingContent = getSection(sectionTitle);
      if (existingContent) {
        setFormData({
          title: existingContent.title,
          description: existingContent.description,
          content: existingContent.content
        });
      }
    }
  }, [isOpen, sectionTitle, getSection]);

  const handleSave = () => {
    updateSection(sectionTitle, formData);
    toast({
      title: "Content Updated",
      description: `${sectionTitle} has been updated successfully!`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit {sectionTitle}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Title</label>
            <Input
              placeholder="Section title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Description</label>
            <Textarea
              placeholder="Brief description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={3}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Content</label>
            <Textarea
              placeholder="Full content"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              rows={8}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-cyber-500 hover:bg-cyber-600">
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContentEditDialog;
