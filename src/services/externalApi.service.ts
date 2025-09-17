import axios from 'axios';
import { config } from '../config/env';
import { createError } from '../middlewares/errorHandler';
import {
  mockTeams,
  mockPlayers,
  mockMatches,
  mockNews,
  mockProducts,
  mockStats,
  MockPlayer,
  MockTeam,
  MockMatch,
  MockNews,
  MockProduct,
} from '../data/mockData';

export interface ExternalMatchData {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  status: string;
  score?: {
    home: number;
    away: number;
  };
  league: string;
}

export interface ExternalPlayerData {
  id: string;
  name: string;
  position: string;
  team: string;
  age: number;
  nationality: string;
  marketValue?: number;
}

export class ExternalApiService {
  private readonly timeout = 5000; // 5 seconds

  async getFootballMatches(): Promise<ExternalMatchData[]> {
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 500));

      // Converter dados mockados para o formato esperado
      return mockMatches.map(match => ({
        id: match.id,
        homeTeam: match.homeTeam,
        awayTeam: match.awayTeam,
        date: match.date,
        status: match.status,
        score: match.score,
        league: match.league,
      }));
    } catch (error) {
      console.error('Erro ao buscar jogos da API externa:', error);
      throw createError('Erro ao buscar dados da API externa', 500, 'EXTERNAL_API_ERROR');
    }
  }

  async getFootballPlayers(): Promise<ExternalPlayerData[]> {
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 300));

      // Converter dados mockados para o formato esperado
      return mockPlayers.map(player => ({
        id: player.id,
        name: `${player.firstName} ${player.lastName}`,
        position: player.position,
        team: mockTeams.find(team => team.id === player.teamId)?.name || 'Sem time',
        age: player.age,
        nationality: player.nationality,
        marketValue: player.marketValue,
      }));
    } catch (error) {
      console.error('Erro ao buscar jogadoras da API externa:', error);
      throw createError('Erro ao buscar dados da API externa', 500, 'EXTERNAL_API_ERROR');
    }
  }

  async getFootballNews(): Promise<any[]> {
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 400));

      // Retornar dados mockados de notícias
      return mockNews;
    } catch (error) {
      console.error('Erro ao buscar notícias da API externa:', error);
      throw createError('Erro ao buscar dados da API externa', 500, 'EXTERNAL_API_ERROR');
    }
  }

  async getSampleData(): Promise<{
    matches: ExternalMatchData[];
    players: ExternalPlayerData[];
    news: any[];
  }> {
    try {
      const [matches, players, news] = await Promise.all([
        this.getFootballMatches(),
        this.getFootballPlayers(),
        this.getFootballNews(),
      ]);

      return {
        matches,
        players,
        news,
      };
    } catch (error) {
      console.error('Erro ao buscar dados de exemplo:', error);
      throw createError('Erro ao buscar dados de exemplo', 500, 'EXTERNAL_API_ERROR');
    }
  }

  // Novos métodos para acessar dados mockados mais ricos
  async getMockTeams(): Promise<MockTeam[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 200));
      return mockTeams;
    } catch (error) {
      console.error('Erro ao buscar times mockados:', error);
      throw createError('Erro ao buscar times', 500, 'MOCK_DATA_ERROR');
    }
  }

  async getMockPlayers(): Promise<MockPlayer[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockPlayers;
    } catch (error) {
      console.error('Erro ao buscar jogadoras mockadas:', error);
      throw createError('Erro ao buscar jogadoras', 500, 'MOCK_DATA_ERROR');
    }
  }

  async getMockMatches(): Promise<MockMatch[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 250));
      return mockMatches;
    } catch (error) {
      console.error('Erro ao buscar jogos mockados:', error);
      throw createError('Erro ao buscar jogos', 500, 'MOCK_DATA_ERROR');
    }
  }

  async getMockNews(): Promise<MockNews[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 200));
      return mockNews;
    } catch (error) {
      console.error('Erro ao buscar notícias mockadas:', error);
      throw createError('Erro ao buscar notícias', 500, 'MOCK_DATA_ERROR');
    }
  }

  async getMockProducts(): Promise<MockProduct[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 150));
      return mockProducts;
    } catch (error) {
      console.error('Erro ao buscar produtos mockados:', error);
      throw createError('Erro ao buscar produtos', 500, 'MOCK_DATA_ERROR');
    }
  }

  async getMockStats(): Promise<typeof mockStats> {
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      return mockStats;
    } catch (error) {
      console.error('Erro ao buscar estatísticas mockadas:', error);
      throw createError('Erro ao buscar estatísticas', 500, 'MOCK_DATA_ERROR');
    }
  }

  // Método para simular chamada real para API externa (quando configurada)
  private async makeExternalApiCall(endpoint: string): Promise<any> {
    if (!config.externalApi.footballApiKey) {
      throw createError('API key não configurada', 500, 'API_KEY_NOT_CONFIGURED');
    }

    try {
      const response = await axios.get(`${config.externalApi.footballApiUrl}${endpoint}`, {
        headers: {
          'X-Auth-Token': config.externalApi.footballApiKey,
        },
        timeout: this.timeout,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          throw createError('Timeout na API externa', 408, 'EXTERNAL_API_TIMEOUT');
        }
        if (error.response?.status === 401) {
          throw createError('API key inválida', 401, 'INVALID_API_KEY');
        }
      }

      throw createError('Erro na comunicação com API externa', 500, 'EXTERNAL_API_ERROR');
    }
  }
}
