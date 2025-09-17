import request from 'supertest';
import app from '../src/app';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/utils/password';
import { generateToken } from '../src/utils/jwt';

const prisma = new PrismaClient();

describe('Players Routes', () => {
  let authToken: string;
  let userId: string;

  beforeAll(async () => {
    // Limpar banco de teste
    await prisma.profile.deleteMany();
    await prisma.user.deleteMany();
    await prisma.team.deleteMany();

    // Criar usuário para autenticação
    const user = await prisma.user.create({
      data: {
        email: 'player@example.com',
        passwordHash: await hashPassword('password123'),
        role: 'ATHLETE'
      }
    });

    userId = user.id;
    authToken = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role
    });

    // Criar time para teste
    await prisma.team.create({
      data: {
        name: 'Test Team',
        city: 'Test City',
        state: 'TS',
        country: 'Brasil'
      }
    });
  });

  afterAll(async () => {
    await prisma.profile.deleteMany();
    await prisma.user.deleteMany();
    await prisma.team.deleteMany();
    await prisma.$disconnect();
  });

  describe('POST /api/players', () => {
    it('should create a new player successfully', async () => {
      const playerData = {
        firstName: 'Test',
        lastName: 'Player',
        position: 'MF',
        age: 25,
        teamId: (await prisma.team.findFirst())?.id
      };

      const response = await request(app)
        .post('/api/players')
        .set('Cookie', `token=${authToken}`)
        .send(playerData)
        .expect(201);

      expect(response.body.message).toBe('Jogadora criada com sucesso');
      expect(response.body.player.firstName).toBe(playerData.firstName);
      expect(response.body.player.lastName).toBe(playerData.lastName);
    });

    it('should not create player without authentication', async () => {
      const playerData = {
        firstName: 'Test',
        lastName: 'Player',
        position: 'MF',
        age: 25
      };

      const response = await request(app)
        .post('/api/players')
        .send(playerData)
        .expect(401);

      expect(response.body.message).toBe('Token de acesso não fornecido');
    });

    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/api/players')
        .set('Cookie', `token=${authToken}`)
        .send({})
        .expect(400);

      expect(response.body.message).toContain('Dados inválidos');
    });
  });

  describe('GET /api/players', () => {
    it('should get players list successfully', async () => {
      const response = await request(app)
        .get('/api/players')
        .set('Cookie', `token=${authToken}`)
        .expect(200);

      expect(response.body.message).toBe('Jogadoras obtidas com sucesso');
      expect(response.body.players).toBeInstanceOf(Array);
      expect(response.body.pagination).toBeDefined();
    });

    it('should filter players by position', async () => {
      const response = await request(app)
        .get('/api/players?position=MF')
        .set('Cookie', `token=${authToken}`)
        .expect(200);

      expect(response.body.message).toBe('Jogadoras obtidas com sucesso');
      expect(response.body.players).toBeInstanceOf(Array);
    });

    it('should not get players without authentication', async () => {
      const response = await request(app)
        .get('/api/players')
        .expect(401);

      expect(response.body.message).toBe('Token de acesso não fornecido');
    });
  });

  describe('GET /api/players/:id', () => {
    let playerId: string;

    beforeEach(async () => {
      // Criar perfil de jogadora para teste
      const profile = await prisma.profile.create({
        data: {
          userId: userId,
          firstName: 'Test',
          lastName: 'Player',
          position: 'MF',
          age: 25,
          role: 'ATHLETE'
        }
      });
      playerId = profile.id;
    });

    it('should get player by id successfully', async () => {
      const response = await request(app)
        .get(`/api/players/${playerId}`)
        .set('Cookie', `token=${authToken}`)
        .expect(200);

      expect(response.body.message).toBe('Jogadora obtida com sucesso');
      expect(response.body.player.id).toBe(playerId);
    });

    it('should not get non-existent player', async () => {
      const response = await request(app)
        .get('/api/players/non-existent-id')
        .set('Cookie', `token=${authToken}`)
        .expect(404);

      expect(response.body.message).toBe('Jogadora não encontrada');
    });
  });
});
