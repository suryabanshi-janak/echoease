import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';

import NewProject from '@/components/NewProject';
import { db } from '@/db';
import { projects } from '@/db/schema';
import ProjectList from './ProjectList';

export default async function DashboardPage() {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId));

  return (
    <div>
      <div className='flex items-center justify-center gap-3'>
        <h1 className='text-3xl font-bold text-center my-4'>Your Projects</h1>
        <NewProject />
      </div>
      <ProjectList projects={userProjects} />
    </div>
  );
}
