import React from 'react';
import { LogOut, Settings, User } from 'lucide-react';
import type { User as UserType } from '@/shared/schema';

interface UserNavProps {
  user?: UserType;
}

export function UserNav({ user }: UserNavProps) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors">
        <img
          src={user?.avatar || 'https://github.com/shadcn.png'}
          alt={user?.name || 'User'}
          className="h-8 w-8 rounded-full"
        />
        <span className="text-sm font-medium">{user?.name || 'User'}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="glass rounded-lg py-2 shadow-xl">
          <a href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-primary/5 transition-colors">
            <User className="h-4 w-4" />
            Profile
          </a>
          <a href="/settings" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-primary/5 transition-colors">
            <Settings className="h-4 w-4" />
            Settings
          </a>
          <div className="h-px bg-white/10 my-2" />
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-primary/5 transition-colors">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}