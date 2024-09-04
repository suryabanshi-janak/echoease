'use server';

import { auth } from '@clerk/nextjs/server';
import { db } from '@/db';
import { projects } from '@/db/schema';

export async function createProject(formData: FormData) {
  const { userId } = auth();

  const project = {
    name: formData.get('name') as string,
    description: formData.get('description') as string,
    url: formData.get('url') as string,
    userId,
  };

  const [projectId] = await db
    .insert(projects)
    .values(project)
    .returning({ insertedId: projects.id });
  console.log('🚀 ~ createProject ~ projectId:', projectId);

  return projectId;
}
