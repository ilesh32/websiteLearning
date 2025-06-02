
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

const ServiceDetailModal = ({ open, onOpenChange, service }) => {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px] bg-card text-card-foreground border-border">
        <DialogHeader>
          <DialogTitle className="gradient-text text-2xl">{service.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2">
            {service.description}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-foreground">
            Our "{service.title}" program is designed to provide in-depth knowledge and practical skills. 
            Participants will engage in various activities, receive expert guidance, and collaborate on impactful projects.
            This is a fantastic opportunity to enhance your expertise and network with professionals in the field.
          </p>
          {/* Add more specific details about the service if available */}
        </div>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} variant="outline">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
