import { PrismaClient, Team, Prisma } from '@prisma/client';
import { createError } from '../middlewares/errorHandler';

const prisma = new PrismaClient();

export interface CreateTeamData {
  name: string;
  city?: string;
  state?: string;
  country?: string;
  founded?: number;
  description?: string;
  website?: string;
}

export interface UpdateTeamData {
  name?: string;
  city?: string;
  state?: string;
  country?: string;
  founded?: number;
  description?: string;
  website?: string;
}

export interface TeamFilters {
  search?: string;
  city?: string;
  state?: string;
  country?: string;
  page?: number;
  limit?: number;
}

export class TeamsService {
  async createTeam(data: CreateTeamData): Promise<Team> {
    // Verificar se o nome do time já existe
    const existingTeam = await prisma.team.findUnique({
      where: { name: data.name },
    });

    if (existingTeam) {
      throw createError('Nome do time já está em uso', 400, 'TEAM_NAME_EXISTS');
    }

    const team = await prisma.team.create({
      data,
      include: {
        players: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                role: true,
              },
            },
          },
        },
        _count: {
          select: {
            players: true,
            posts: true,
          },
        },
      },
    });

    return team;
  }

  async getTeams(filters: TeamFilters = {}) {
    const { search, city, state, country, page = 1, limit = 10 } = filters;

    const skip = (page - 1) * limit;

    const where: Prisma.TeamWhereInput = {};

    if (search) {
      where.OR = [
        { name: { contains: search } },
        { city: { contains: search } },
        { description: { contains: search } },
      ];
    }

    if (city) {
      where.city = { contains: city };
    }

    if (state) {
      where.state = { contains: state };
    }

    if (country) {
      where.country = { contains: country };
    }

    const [teams, total] = await Promise.all([
      prisma.team.findMany({
        where,
        include: {
          players: {
            include: {
              user: {
                select: {
                  id: true,
                  email: true,
                  role: true,
                },
              },
            },
          },
          _count: {
            select: {
              players: true,
              posts: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.team.count({ where }),
    ]);

    return {
      teams,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async getTeamById(id: string): Promise<Team> {
    const team = await prisma.team.findUnique({
      where: { id },
      include: {
        players: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                role: true,
              },
            },
          },
        },
        posts: {
          include: {
            author: {
              select: {
                id: true,
                email: true,
                profile: {
                  select: {
                    firstName: true,
                    lastName: true,
                    avatar: true,
                  },
                },
              },
            },
            _count: {
              select: {
                comments: true,
                likes: true,
              },
            },
          },
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
        _count: {
          select: {
            players: true,
            posts: true,
          },
        },
      },
    });

    if (!team) {
      throw createError('Time não encontrado', 404, 'TEAM_NOT_FOUND');
    }

    return team;
  }

  async updateTeam(id: string, data: UpdateTeamData): Promise<Team> {
    const team = await this.getTeamById(id);

    // Verificar se o novo nome já existe (se fornecido)
    if (data.name && data.name !== team.name) {
      const existingTeam = await prisma.team.findUnique({
        where: { name: data.name },
      });

      if (existingTeam) {
        throw createError('Nome do time já está em uso', 400, 'TEAM_NAME_EXISTS');
      }
    }

    const updatedTeam = await prisma.team.update({
      where: { id },
      data,
      include: {
        players: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                role: true,
              },
            },
          },
        },
        _count: {
          select: {
            players: true,
            posts: true,
          },
        },
      },
    });

    return updatedTeam;
  }

  async deleteTeam(id: string): Promise<void> {
    const team = await this.getTeamById(id);

    // Verificar se o time tem jogadoras
    const playerCount = await prisma.profile.count({
      where: { teamId: id },
    });

    if (playerCount > 0) {
      throw createError(
        `Não é possível deletar o time. Existem ${playerCount} jogadora(s) cadastrada(s).`,
        400,
        'TEAM_HAS_PLAYERS'
      );
    }

    await prisma.team.delete({
      where: { id },
    });
  }

  async getTeamPlayers(teamId: string) {
    const team = await this.getTeamById(teamId);

    const players = await prisma.profile.findMany({
      where: { teamId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: [{ position: 'asc' }, { firstName: 'asc' }],
    });

    return players;
  }
}
