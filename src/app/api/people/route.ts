import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  const people = await prisma.person.findMany();
  return NextResponse.json(people);
}

export async function PUT(request: Request) {
  const data = await request.json();
  const person = await prisma.person.update({
    where: { id: data.id },
    data: { hasOptedIn: data.hasOptedIn }
  });
  return NextResponse.json(person);
} 