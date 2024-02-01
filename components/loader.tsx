import { Loader2 } from 'lucide-react';

export const Loader = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <Loader2 className='animate-spin w-10 h-10 mr-2' /> Loading...
    </div>
  );
};
