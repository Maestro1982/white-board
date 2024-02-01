'use client';

import { Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={() => {}}
      className={cn(
        'col-span-1 aspect-[100/127] bg-blue-500 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6',
        disabled && 'opacity-75'
      )}
    >
      <div />
      <Plus className='w-12 h-12 stroke-1 text-white' />
      <p className='text-sm text-white font-light'>New board</p>
    </button>
  );
};
