import { PropsWithChildren, Suspense } from 'react';
import Loading from './loading';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='container mx-auto max-w-screen-xl py-10 px-2.5 lg:px-20'>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
