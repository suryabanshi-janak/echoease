import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='container mx-auto max-w-screen-xl py-10 px-2.5 lg:px-20'>
      {children}
    </div>
  );
}
