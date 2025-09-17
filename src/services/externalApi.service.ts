import axios from 'axios';
import { config } from '../config/env';
import { createError } from '../middlewares/errorHandler';

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
      // Simular dados de API externa para demonstração
      // Em produção, aqui seria feita a chamada real para uma API de futebol
      const mockMatches: ExternalMatchData[] = [
        {
          id: '1',
          homeTeam: 'Flamengo Feminino',
          awayTeam: 'Corinthians Feminino',
          date: '2024-01-15T16:00:00Z',
          status: 'SCHEDULED',
          league: 'Brasileirão Feminino'
        },
        {
          id: '2',
          homeTeam: 'São Paulo Feminino',
          awayTeam: 'Palmeiras Feminino',
          date: '2024-01-16T16:00:00Z',
          status: 'SCHEDULED',
          league: 'Brasileirão Feminino'
        },
        {
          id: '3',
          homeTeam: 'Santos Feminino',
          awayTeam: 'Grêmio Feminino',
          date: '2024-01-17T16:00:00Z',
          status: 'FINISHED',
          score: { home: 2, away: 1 },
          league: 'Brasileirão Feminino'
        }
      ];

      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 500));

      return mockMatches;
    } catch (error) {
      console.error('Erro ao buscar jogos da API externa:', error);
      throw createError('Erro ao buscar dados da API externa', 500, 'EXTERNAL_API_ERROR');
    }
  }

  async getFootballPlayers(): Promise<ExternalPlayerData[]> {
    try {
      // Simular dados de jogadoras da API externa
      const mockPlayers: ExternalPlayerData[] = [
        {
          id: '1',
          name: 'Marta Vieira da Silva',
          position: 'MF',
          team: 'Orlando Pride',
          age: 37,
          nationality: 'Brasileira',
          marketValue: 500000
        },
        {
          id: '2',
          name: 'Debinha',
          position: 'FW',
          team: 'Kansas City Current',
          age: 32,
          nationality: 'Brasileira',
          marketValue: 300000
        },
        {
          id: '3',
          name: 'Leticia Izidoro',
          position: 'GK',
          team: 'Corinthians',
          age: 31,
          nationality: 'Brasileira',
          marketValue: 200000
        }
      ];

      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 300));

      return mockPlayers;
    } catch (error) {
      console.error('Erro ao buscar jogadoras da API externa:', error);
      throw createError('Erro ao buscar dados da API externa', 500, 'EXTERNAL_API_ERROR');
    }
  }

  async getFootballNews(): Promise<any[]> {
    try {
      // Simular dados de notícias sobre futebol feminino
      const mockNews = [
        {
          id: '1',
          title: 'Seleção Brasileira Feminina anuncia convocadas para amistosos',
          summary: 'Técnica Pia Sundhage convocou 23 jogadoras para os amistosos de janeiro',
          date: '2024-01-10',
          source: 'CBF',
          url: 'https://example.com/news/1'
        },
        {
          id: '2',
          title: 'Brasileirão Feminino define calendário para 2024',
          summary: 'Competição terá 16 times e início em março',
          date: '2024-01-08',
          source: 'CBF',
          url: 'https://example.com/news/2'
        }
      ];

      await new Promise(resolve => setTimeout(resolve, 400));

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
        this.getFootballNews()
      ]);

      return {
        matches,
        players,
        news
      };
    } catch (error) {
      console.error('Erro ao buscar dados de exemplo:', error);
      throw createError('Erro ao buscar dados de exemplo', 500, 'EXTERNAL_API_ERROR');
    }
  }

  // Método para simular chamada real para API externa (quando configurada)
  private async makeExternalApiCall(endpoint: string): Promise<any> {
    if (!config.externalApi.footballApiKey) {
      throw createError('API key não configurada', 500, 'API_KEY_NOT_CONFIGURED');
    }

    try {
      const response = await axios.get(
        `${config.externalApi.footballApiUrl}${endpoint}`,
        {
          headers: {
            'X-Auth-Token': config.externalApi.footballApiKey
          },
          timeout: this.timeout
        }
      );

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
