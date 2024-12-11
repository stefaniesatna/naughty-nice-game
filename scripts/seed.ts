import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const people = [
  { id: '1', name: 'John Doe', hasOptedIn: false },
  { id: '2', name: 'Jane Smith', hasOptedIn: false },
  { id: '3', name: 'Bob Johnson', hasOptedIn: false },
];

async function seed() {
  for (const person of people) {
    await prisma.person.upsert({
      where: { id: person.id },
      update: {},
      create: person,
    });
  }
}

seed()
  .then(() => console.log('Database seeded'))
  .catch(console.error)
  .finally(() => prisma.$disconnect()); 