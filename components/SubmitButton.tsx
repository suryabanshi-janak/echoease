'use client';

import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

import { Button } from './ui/button';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' disabled={pending}>
      {pending ? (
        <>
          <Loader2 className='size-4 mr-2 animate-spin' /> Creating...
        </>
      ) : (
        'Creat Project'
      )}
    </Button>
  );
}
