import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'fallback-secret-key',
  databaseUrl: process.env.DATABASE_URL || 'file:./dev.db',
  externalApi: {
    footballApiKey: process.env.FOOTBALL_API_KEY || '',
    footballApiUrl: process.env.FOOTBALL_API_URL || 'https://api.football-data.org/v4'
  }
};
