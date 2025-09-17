import { PrismaClient } from '@prisma/client';

// Setup para testes
beforeAll(async () => {
  // Configurações globais para testes
  process.env.NODE_ENV = 'test';
  process.env.DATABASE_URL = 'file:./test.db';
  process.env.JWT_SECRET = 'test-secret-key';
});

afterAll(async () => {
  // Limpeza após todos os testes
  const prisma = new PrismaClient();
  await prisma.$disconnect();
});
