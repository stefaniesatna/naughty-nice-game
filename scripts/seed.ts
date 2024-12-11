import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const people = [
  { 
    id: '1', 
    name: 'Holly Mistletoe', 
    hasOptedIn: true,
    score: 4  // £2 in credit
  },
  { 
    id: '2', 
    name: 'Nicholas Saint', 
    hasOptedIn: true,
    score: 8  // £4 in credit
  },
  { 
    id: '3', 
    name: 'Mary Christmas', 
    hasOptedIn: true,
    score: -6  // £3 in debt
  },
  { 
    id: '4', 
    name: 'Jack Frost', 
    hasOptedIn: true,
    score: -10  // £5 in debt
  },
  { 
    id: '5', 
    name: 'Carol Singer', 
    hasOptedIn: true,
    score: 2  // £1 in credit
  },
  { 
    id: '6', 
    name: 'Tim Tinsel', 
    hasOptedIn: false,
    score: 0
  },
  { 
    id: '7', 
    name: 'Eve Angel', 
    hasOptedIn: true,
    score: 6  // £3 in credit
  },
  { 
    id: '8', 
    name: 'Rudy Reindeer', 
    hasOptedIn: true,
    score: -4  // £2 in debt
  },
  { 
    id: '9', 
    name: 'Frosty Snowman', 
    hasOptedIn: false,
    score: 0
  },
  { 
    id: '10', 
    name: 'Candy Cane', 
    hasOptedIn: false,
    score: 0
  }
];

async function seed() {
  // Clear existing data
  await prisma.vote.deleteMany();
  await prisma.person.deleteMany();

  // Insert new data
  for (const person of people) {
    await prisma.person.create({
      data: person,
    });
  }
}

seed()
  .then(() => console.log('Database seeded with festive names! 🎄'))
  .catch(console.error)
  .finally(() => prisma.$disconnect()); 