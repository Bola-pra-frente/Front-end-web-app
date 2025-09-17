import app from '../src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Conectar ao banco de dados
prisma
  .$connect()
  .then(() => {
    console.log('✅ Banco de dados conectado com sucesso');
  })
  .catch(error => {
    console.error('❌ Erro ao conectar banco de dados:', error);
  });

export default app;
