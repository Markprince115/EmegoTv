//user profile page
'use client';

import React, { useEffect } from 'react';
import useAuthStore from '@/store/AuthStore';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const ProfilePage = () => {
  const { user, token, logout, isLoading } = useAuthStore();
  const router = useRouter();
  const [username, setUsername] = React.useState('');
  const [isUpdating, setIsUpdating] = React.useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    } else if (user) {
      setUsername(user.username);
    }
  }, [isLoading, user, router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const handleUpdateProfile = async () => {
    setIsUpdating(true);
    try {
      await axios.put('/api/user/profile', 
        { username }, 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update profile');
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
          <CardDescription>
            Manage your account settings and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input 
              type="email" 
              value={user.email} 
              disabled 
              className="bg-muted"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Username</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Role</label>
            <Input 
              type="text" 
              value={user.role} 
              disabled 
              className="bg-muted"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleLogout}
          >
            Logout
          </Button>
          <Button
            onClick={handleUpdateProfile}
            disabled={isUpdating}
          >
            {isUpdating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              'Update Profile'
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfilePage;
