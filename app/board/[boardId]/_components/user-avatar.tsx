'use client';

import { useState, useEffect, useRef } from 'react';
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
  const avatarRef = useRef<HTMLDivElement>(null); // Specify the type of ref

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Close dropdown if the clicked element is not within the Avatar component
      if (
        avatarRef.current &&
        event.target instanceof Node &&
        !avatarRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    // Add event listener to detect clicks outside the Avatar component
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Logout function triggered on avatar click
  const handleLogout = () => {
    currentUser.signOut();
  };

  return (
    <div className='relative inline-block' ref={avatarRef}>
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
        <div className='absolute top-10 right-0 bg-white border rounded-md shadow-md mt-1'>
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
