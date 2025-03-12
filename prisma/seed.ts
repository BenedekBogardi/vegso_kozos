import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
  const concerts = [
    {
      performer: 'AC/DC',
      startTime: new Date('2025-05-01T19:00:00Z'),
      duration: 90,
      cancelled: false,
    },
    {
      performer: 'Guns N Roses',
      startTime: new Date('2025-05-02T19:00:00Z'),
      duration: 90,
      cancelled: false,
    },
    {
      performer: 'Rammstein',
      startTime: new Date('2025-05-03T19:00:00Z'),
      duration: 100,
      cancelled: false,
    },
    {
      performer: 'Furkó Ferkó',
      startTime: new Date('2025-05-04T19:00:00Z'),
      duration: 110,
      cancelled: true,
    },
    {
      performer: 'Hamada Helal',
      startTime: new Date('2025-05-05T19:00:00Z'),
      duration: 80,
      cancelled: false,
    },
  ];

  for (const concert of concerts) {
    await prisma.concert.create({
      data: concert,
    });
  }
}

main()
.then(async () => {
  console.log('Database seeded successfully!');
  await prisma.$disconnect();
})
.catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});