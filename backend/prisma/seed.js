const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const projects = [
    {
      title: 'ASHA Worker Digital Assistant',
      description: 'A mobile application designed to help ASHA workers manage patient records, record health data, work offline, and synchronize data when an internet connection becomes available.',
      technologies: ['React Native', 'TypeScript', 'WatermelonDB', 'Node.js'],
      githubUrl: 'https://github.com/rohan/asha-assistant',
      liveUrl: '',
    },
    {
      title: 'AI Personalized Fitness Coach',
      description: 'An AI-powered fitness application that provides personalized workout and fitness recommendations based on user information and fitness goals.',
      technologies: ['Python', 'Machine Learning', 'React', 'Node.js'],
      githubUrl: 'https://github.com/rohan/ai-fitness',
      liveUrl: '',
    }
  ];

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
