'use client';

import { useState } from 'react';
import { useClerk } from '@clerk/clerk-react';

import { Hint } from '@/components/hint';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

export const UserAvatar = ({
  src,
  name,
  fallback,
  borderColor,
}: UserAvatarProps) => {
  const currentUser = useClerk();

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Logout function triggered on avatar click
  const handleLogout = () => {
    currentUser.signOut();
  };

  return (
    <div className='relative inline-block'>
      <Hint label={name || 'Team_member'} side='bottom' sideOffset={18}>
        <Avatar
          className='h-8 w-8 border-2 cursor-pointer'
          style={{ borderColor }}
          onClick={toggleDropdown}
        >
          <AvatarImage src={src} />
          <AvatarFallback className='text-xs font-semibold'>
            {fallback}
          </AvatarFallback>
        </Avatar>
      </Hint>

      {isDropdownVisible && (
        <div className='absolute top-10 right-0 bg-white border rounded-md shadow-md'>
          <div
            className='p-2 cursor-pointer hover:bg-gray-100'
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};
