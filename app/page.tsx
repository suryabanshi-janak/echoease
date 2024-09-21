import Link from 'next/link';
import Image from 'next/image';
import { SignedOut, SignUpButton, SignedIn } from '@clerk/nextjs';
import { LogIn, Github } from 'lucide-react';

import { Button } from '@/components/ui/button';
import PricingCard from '@/components/PricingCard';

export type PricingPlan = {
  title: string;
  price: number;
  description: string;
  isPopular: boolean;
  features: string[];
  url: string;
};

const features = [
  {
    title: 'Seamless Integration',
    description: 'Easily integrate with your existing tools and services.',
  },
  {
    title: 'Customizable',
    description: 'Customize Nexx to fit your needs and preferences.',
    icon: 'icon-2',
  },
  {
    title: 'Analytics',
    description: 'Track and analyze feedback to make informed decisions.',
  },
  {
    title: 'Secure',
    description: 'Your data is safe and secure with Nexx.',
  },
  {
    title: 'Scalable',
    description: 'Grow your business with Nexx as you scale.',
  },
  {
    title: 'Fast Support',
    description: 'Get help when you need it with our fast support team.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Free',
    price: 0,
    description: 'For small teams just getting started',
    isPopular: false,
    url: '/dashboard',
    features: [
      '3 projects',
      'Unlimited users',
      '2GB storage',
      'Priority support',
    ],
  },
  {
    title: 'Monthly',
    price: 6.99,
    description: 'For growing teams',
    isPopular: true,
    url: '/payments/subscribe?plan=monthly',
    features: [
      'Unlimited projects',
      'Unlimited users',
      '5GB storage',
      'Priority support',
    ],
  },
  {
    title: 'Yearly',
    price: 39.99,
    description: 'Upgrade to save more!',
    isPopular: false,
    url: '/payments/subscribe?plan=yearly',
    features: [
      'Unlimited projects',
      'Unlimited users',
      '50GB storage',
      '24/7 support',
    ],
  },
];

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-24'>
      <section className='grow'>
        <div className='container mx-auto px-4 mb-24 mt-4 flex flex-col md:flex-row justify-center'>
          <div className='flex flex-col max-w-sm justify-center'>
            <div className='mb-8'>
              <h1 className='mb-5 text-5xl font-extrabold leading-tight'>
                Collect your feedback seamlessly
              </h1>
              <p className='text-gray-500 texl-lg'>
                Easily integrate Nexx and start collecting feedback today.
              </p>
            </div>
            <div>
              <SignedOut>
                <SignUpButton>
                  <div className='flex gap-3'>
                    <Button>
                      <LogIn className='w-4 h-4 mr-2' />
                      Get Started
                    </Button>
                    <Button variant='secondary' asChild>
                      <Link href='https://github.com'>
                        <Github className='w-4 h-4 mr-2' />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button asChild>
                  <Link href='/dashboard'>Dashboard</Link>
                </Button>
              </SignedIn>
            </div>
          </div>
          <div className='flex-1 max-w-lg'>
            <Image
              src='/demo.gif'
              alt='demo'
              layout='responsive'
              width={155}
              height={155}
              unoptimized={true}
            />
          </div>
        </div>
      </section>

      <section className='container mx-auto max-w-screen-xl px-4 my-24 flex items-center flex-col'>
        <h2 className='mb-6 text-2xl font-bold'>Features</h2>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {features.map(({ title, description }, index) => (
              <div className='p-5 border rounded-lg shadow-md' key={title}>
                <h4 className='mb-2 font-semibold'>{title}</h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='text-center'>
        <h1 className='capitalize text-3xl'>Pricing</h1>
        <h2 className='font-extrabold text-3xl mb-8 pt-3'>
          Flexible Pricing to Fit Your Needs
        </h2>
        <div className='mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl'>
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>

      <footer className='mb-3 mt-24 border-t flex w-full p-4'>
        <p className='text-gray-800'>&copy; 2024 Company, Inc.</p>
      </footer>
    </main>
  );
}
