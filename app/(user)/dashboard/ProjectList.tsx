import Link from 'next/link';
import { InferInsertModel } from 'drizzle-orm';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/db/schema';

type Project = InferInsertModel<typeof projects>;

type Props = {
  projects: Project[];
};

export default function ProjectList({ projects }: Props) {
  return (
    <div>
      <ul className='grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4'>
        {projects.map((project: Project) => (
          <li key={project.id}>
            <Card className='max-w-[350px] flex flex-col h-full'>
              <CardHeader className='flex-1'>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/projects/${project.id}`}>
                  <Button>View Project</Button>
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
