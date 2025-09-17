import { PrismaClient, Profile, Prisma } from '@prisma/client';
import { createError } from '../middlewares/errorHandler';

const prisma = new PrismaClient();

export interface CreatePlayerData {
  firstName: string;
  lastName: string;
  position: string;
  age: number;
  teamId?: string;
  height?: number;
  weight?: number;
  dominantFoot?: 'LEFT' | 'RIGHT' | 'BOTH';
  bio?: string;
  userId: string;
}

export interface UpdatePlayerData {
  firstName?: string;
  lastName?: string;
  position?: string;
  age?: number;
  teamId?: string;
  height?: number;
  weight?: number;
  dominantFoot?: 'LEFT' | 'RIGHT' | 'BOTH';
  bio?: string;
}

export interface PlayerFilters {
  search?: string;
  teamId?: string;
  position?: string;
  minAge?: number;
  maxAge?: number;
  page?: number;
  limit?: number;
}

export class PlayersService {
  async createPlayer(data: CreatePlayerData): Promise<Profile> {
    const { userId, ...profileData } = data;

    // Verificar se o usuário já tem um perfil
    const existingProfile = await prisma.profile.findUnique({
      where: { userId },
    });

    if (existingProfile) {
      throw createError('Usuário já possui um perfil', 400, 'PROFILE_ALREADY_EXISTS');
    }

    // Verificar se o time existe (se fornecido)
    if (data.teamId) {
      const team = await prisma.team.findUnique({
        where: { id: data.teamId },
      });

      if (!team) {
        throw createError('Time não encontrado', 404, 'TEAM_NOT_FOUND');
      }
    }

    const profile = await prisma.profile.create({
      data: {
        ...profileData,
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            role: true,
            createdAt: true,
          },
        },
        team: true,
      },
    });

    return profile;
  }

  async getPlayers(filters: PlayerFilters = {}) {
    const { search, teamId, position, minAge, maxAge, page = 1, limit = 10 } = filters;

    const skip = (page - 1) * limit;

    const where: Prisma.ProfileWhereInput = {
      // Filtrar apenas perfis de atletas (usuários com role ATHLETE)
      user: {
        role: 'ATHLETE',
      },
    };

    if (search) {
      where.OR = [{ firstName: { contains: search } }, { lastName: { contains: search } }];
    }

    if (teamId) {
      where.teamId = teamId;
    }

    if (position) {
      where.position = position;
    }

    if (minAge || maxAge) {
      where.age = {};
      if (minAge) where.age.gte = minAge;
      if (maxAge) where.age.lte = maxAge;
    }

    const [players, total] = await Promise.all([
      prisma.profile.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              role: true,
              createdAt: true,
            },
          },
          team: true,
        },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.profile.count({ where }),
    ]);

    return {
      players,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async getPlayerById(id: string): Promise<Profile> {
    const player = await prisma.profile.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            role: true,
            createdAt: true,
          },
        },
        team: true,
      },
    });

    if (!player) {
      throw createError('Jogadora não encontrada', 404, 'PLAYER_NOT_FOUND');
    }

    return player;
  }

  async updatePlayer(id: string, data: UpdatePlayerData, userId: string): Promise<Profile> {
    const player = await this.getPlayerById(id);

    // Verificar se o usuário pode editar este perfil
    if (player.userId !== userId) {
      throw createError('Você não pode editar este perfil', 403, 'FORBIDDEN');
    }

    // Verificar se o time existe (se fornecido)
    if (data.teamId) {
      const team = await prisma.team.findUnique({
        where: { id: data.teamId },
      });

      if (!team) {
        throw createError('Time não encontrado', 404, 'TEAM_NOT_FOUND');
      }
    }

    const updatedPlayer = await prisma.profile.update({
      where: { id },
      data,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            role: true,
            createdAt: true,
          },
        },
        team: true,
      },
    });

    return updatedPlayer;
  }

  async deletePlayer(id: string, userId: string): Promise<void> {
    const player = await this.getPlayerById(id);

    // Verificar se o usuário pode deletar este perfil
    if (player.userId !== userId) {
      throw createError('Você não pode deletar este perfil', 403, 'FORBIDDEN');
    }

    await prisma.profile.delete({
      where: { id },
    });
  }
}
