// Dados mockados para o Passa a Bola - Women's Football Network

export interface MockPlayer {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  age: number;
  teamId?: string;
  height?: number;
  weight?: number;
  dominantFoot?: 'LEFT' | 'RIGHT' | 'BOTH';
  bio?: string;
  nationality: string;
  marketValue?: number;
  avatar?: string;
  stats?: {
    goals: number;
    assists: number;
    matches: number;
    yellowCards: number;
    redCards: number;
  };
}

export interface MockTeam {
  id: string;
  name: string;
  city?: string;
  state?: string;
  country?: string;
  founded?: number;
  description?: string;
  website?: string;
  logo?: string;
  colors?: {
    primary: string;
    secondary: string;
  };
  league?: string;
  players?: MockPlayer[];
}

export interface MockMatch {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  status: 'SCHEDULED' | 'LIVE' | 'FINISHED' | 'POSTPONED';
  score?: {
    home: number;
    away: number;
  };
  league: string;
  venue?: string;
  referee?: string;
  attendance?: number;
}

export interface MockNews {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  source: string;
  url?: string;
  image?: string;
  category: 'GAME' | 'TRANSFER' | 'TRAINING' | 'AWARD' | 'GENERAL';
  tags: string[];
}

export interface MockProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'JERSEY' | 'ACCESSORY' | 'MERCHANDISE';
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  featured: boolean;
}

// Times mockados
export const mockTeams: MockTeam[] = [
  {
    id: '1',
    name: 'Flamengo Feminino',
    city: 'Rio de Janeiro',
    state: 'RJ',
    country: 'Brasil',
    founded: 2017,
    description:
      'Time feminino do Clube de Regatas do Flamengo, uma das principais equipes do futebol feminino brasileiro.',
    website: 'https://flamengo.com.br',
    logo: '/img/placeholder.svg',
    colors: {
      primary: '#FF0000',
      secondary: '#000000',
    },
    league: 'Brasileirão Feminino',
  },
  {
    id: '2',
    name: 'Corinthians Feminino',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    founded: 2016,
    description:
      'Time feminino do Sport Club Corinthians Paulista, campeão da Libertadores Feminina.',
    website: 'https://corinthians.com.br',
    logo: '/img/placeholder.svg',
    colors: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
    league: 'Brasileirão Feminino',
  },
  {
    id: '3',
    name: 'São Paulo Feminino',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    founded: 2018,
    description: 'Time feminino do São Paulo Futebol Clube, em crescimento no cenário nacional.',
    website: 'https://saopaulofc.net',
    logo: '/img/placeholder.svg',
    colors: {
      primary: '#FF0000',
      secondary: '#FFFFFF',
    },
    league: 'Brasileirão Feminino',
  },
  {
    id: '4',
    name: 'Palmeiras Feminino',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    founded: 2019,
    description: 'Time feminino da Sociedade Esportiva Palmeiras, investindo no futebol feminino.',
    website: 'https://palmeiras.com.br',
    logo: '/img/placeholder.svg',
    colors: {
      primary: '#006600',
      secondary: '#FFFFFF',
    },
    league: 'Brasileirão Feminino',
  },
  {
    id: '5',
    name: 'Santos Feminino',
    city: 'Santos',
    state: 'SP',
    country: 'Brasil',
    founded: 2017,
    description: 'Time feminino do Santos Futebol Clube, tradição e inovação no futebol feminino.',
    website: 'https://santosfc.com.br',
    logo: '/img/placeholder.svg',
    colors: {
      primary: '#FFFFFF',
      secondary: '#000000',
    },
    league: 'Brasileirão Feminino',
  },
];

// Jogadoras mockadas
export const mockPlayers: MockPlayer[] = [
  {
    id: '1',
    firstName: 'Marta',
    lastName: 'Vieira da Silva',
    position: 'MF',
    age: 37,
    teamId: '1',
    height: 163,
    weight: 58,
    dominantFoot: 'LEFT',
    bio: 'Considerada uma das maiores jogadoras de futebol de todos os tempos. Seis vezes eleita a melhor jogadora do mundo pela FIFA.',
    nationality: 'Brasileira',
    marketValue: 500000,
    avatar: 'https://via.placeholder.com/200x200/FF0000/FFFFFF?text=M',
    stats: {
      goals: 115,
      assists: 89,
      matches: 156,
      yellowCards: 12,
      redCards: 0,
    },
  },
  {
    id: '2',
    firstName: 'Debinha',
    lastName: 'Cristiane Rozeira',
    position: 'FW',
    age: 32,
    teamId: '2',
    height: 157,
    weight: 55,
    dominantFoot: 'RIGHT',
    bio: 'Atacante experiente com passagem por grandes clubes internacionais. Conhecida por sua velocidade e finalização.',
    nationality: 'Brasileira',
    marketValue: 300000,
    avatar: 'https://via.placeholder.com/200x200/000000/FFFFFF?text=D',
    stats: {
      goals: 78,
      assists: 45,
      matches: 120,
      yellowCards: 8,
      redCards: 1,
    },
  },
  {
    id: '3',
    firstName: 'Leticia',
    lastName: 'Izidoro',
    position: 'GK',
    age: 31,
    teamId: '2',
    height: 170,
    weight: 65,
    dominantFoot: 'RIGHT',
    bio: 'Goleira experiente da seleção brasileira. Conhecida por suas defesas espetaculares e liderança em campo.',
    nationality: 'Brasileira',
    marketValue: 200000,
    avatar: 'https://via.placeholder.com/200x200/000000/FFFFFF?text=L',
    stats: {
      goals: 0,
      assists: 2,
      matches: 95,
      yellowCards: 3,
      redCards: 0,
    },
  },
  {
    id: '4',
    firstName: 'Tamires',
    lastName: 'Cássia Dias',
    position: 'DF',
    age: 35,
    teamId: '1',
    height: 168,
    weight: 62,
    dominantFoot: 'LEFT',
    bio: 'Lateral-esquerda experiente com passagem pela seleção brasileira. Conhecida por sua versatilidade e experiência.',
    nationality: 'Brasileira',
    marketValue: 180000,
    avatar: 'https://via.placeholder.com/200x200/FF0000/FFFFFF?text=T',
    stats: {
      goals: 12,
      assists: 28,
      matches: 110,
      yellowCards: 15,
      redCards: 2,
    },
  },
  {
    id: '5',
    firstName: 'Andressa',
    lastName: 'Alves da Silva',
    position: 'MF',
    age: 30,
    teamId: '3',
    height: 165,
    weight: 60,
    dominantFoot: 'RIGHT',
    bio: 'Meio-campista técnica com boa visão de jogo. Experiência internacional e liderança em campo.',
    nationality: 'Brasileira',
    marketValue: 250000,
    avatar: 'https://via.placeholder.com/200x200/FF0000/FFFFFF?text=A',
    stats: {
      goals: 45,
      assists: 67,
      matches: 98,
      yellowCards: 10,
      redCards: 0,
    },
  },
  {
    id: '6',
    firstName: 'Bárbara',
    lastName: 'Michele Barbosa',
    position: 'GK',
    age: 29,
    teamId: '4',
    height: 175,
    weight: 68,
    dominantFoot: 'RIGHT',
    bio: 'Goleira jovem e promissora. Conhecida por suas defesas reflexas e boa saída de bola.',
    nationality: 'Brasileira',
    marketValue: 150000,
    avatar: 'https://via.placeholder.com/200x200/006600/FFFFFF?text=B',
    stats: {
      goals: 0,
      assists: 1,
      matches: 65,
      yellowCards: 2,
      redCards: 0,
    },
  },
  {
    id: '7',
    firstName: 'Cristiane',
    lastName: 'Rozeira de Souza Silva',
    position: 'FW',
    age: 38,
    teamId: '5',
    height: 172,
    weight: 70,
    dominantFoot: 'RIGHT',
    bio: 'Atacante experiente com longa carreira no futebol feminino. Conhecida por sua força física e finalização.',
    nationality: 'Brasileira',
    marketValue: 120000,
    avatar: 'https://via.placeholder.com/200x200/FFFFFF/000000?text=C',
    stats: {
      goals: 95,
      assists: 32,
      matches: 140,
      yellowCards: 18,
      redCards: 1,
    },
  },
  {
    id: '8',
    firstName: 'Erika',
    lastName: 'Cristina dos Santos',
    position: 'DF',
    age: 33,
    teamId: '3',
    height: 166,
    weight: 64,
    dominantFoot: 'RIGHT',
    bio: 'Zagueira experiente com boa leitura de jogo. Liderança em campo e experiência internacional.',
    nationality: 'Brasileira',
    marketValue: 160000,
    avatar: 'https://via.placeholder.com/200x200/FF0000/FFFFFF?text=E',
    stats: {
      goals: 8,
      assists: 15,
      matches: 105,
      yellowCards: 20,
      redCards: 3,
    },
  },
];

// Jogos mockados
export const mockMatches: MockMatch[] = [
  {
    id: '1',
    homeTeam: 'Flamengo Feminino',
    awayTeam: 'Corinthians Feminino',
    date: '2024-01-15T16:00:00Z',
    status: 'SCHEDULED',
    league: 'Brasileirão Feminino',
    venue: 'Maracanã',
    referee: 'Edina Alves',
    attendance: 25000,
  },
  {
    id: '2',
    homeTeam: 'São Paulo Feminino',
    awayTeam: 'Palmeiras Feminino',
    date: '2024-01-16T16:00:00Z',
    status: 'SCHEDULED',
    league: 'Brasileirão Feminino',
    venue: 'Morumbi',
    referee: 'Fernanda Colombo',
    attendance: 18000,
  },
  {
    id: '3',
    homeTeam: 'Santos Feminino',
    awayTeam: 'Grêmio Feminino',
    date: '2024-01-17T16:00:00Z',
    status: 'FINISHED',
    score: { home: 2, away: 1 },
    league: 'Brasileirão Feminino',
    venue: 'Vila Belmiro',
    referee: 'Debora Correia',
    attendance: 12000,
  },
  {
    id: '4',
    homeTeam: 'Corinthians Feminino',
    awayTeam: 'Flamengo Feminino',
    date: '2024-01-20T16:00:00Z',
    status: 'LIVE',
    score: { home: 1, away: 0 },
    league: 'Brasileirão Feminino',
    venue: 'Arena Corinthians',
    referee: 'Edina Alves',
    attendance: 30000,
  },
  {
    id: '5',
    homeTeam: 'Palmeiras Feminino',
    awayTeam: 'São Paulo Feminino',
    date: '2024-01-22T16:00:00Z',
    status: 'SCHEDULED',
    league: 'Brasileirão Feminino',
    venue: 'Allianz Parque',
    referee: 'Fernanda Colombo',
    attendance: 20000,
  },
];

// Notícias mockadas
export const mockNews: MockNews[] = [
  {
    id: '1',
    title: 'Seleção Brasileira Feminina anuncia convocadas para amistosos',
    summary:
      'Técnica Pia Sundhage convocou 23 jogadoras para os amistosos de janeiro contra Argentina e Chile',
    content:
      'A seleção brasileira feminina de futebol anunciou nesta segunda-feira a lista de 23 jogadoras convocadas para os amistosos contra Argentina e Chile, que serão realizados em janeiro. A lista inclui nomes experientes como Marta, Debinha e Leticia Izidoro, além de algumas novatas que vêm se destacando no cenário nacional.',
    date: '2024-01-10',
    author: 'Redação CBF',
    source: 'CBF',
    url: 'https://example.com/news/1',
    image: '/img/placeholder.svg',
    category: 'GENERAL',
    tags: ['seleção', 'convocação', 'amistosos'],
  },
  {
    id: '2',
    title: 'Brasileirão Feminino define calendário para 2024',
    summary: 'Competição terá 16 times e início em março, com final prevista para dezembro',
    content:
      'A Confederação Brasileira de Futebol (CBF) divulgou o calendário oficial do Brasileirão Feminino 2024. A competição terá 16 times participantes e começará em março, com a final prevista para dezembro. O formato será de pontos corridos, com todos contra todos em turno e returno.',
    date: '2024-01-08',
    author: 'Redação CBF',
    source: 'CBF',
    url: 'https://example.com/news/2',
    image: '/img/placeholder.svg',
    category: 'GAME',
    tags: ['brasileirão', 'calendário', '2024'],
  },
  {
    id: '3',
    title: 'Marta recebe prêmio de melhor jogadora do mundo pela sexta vez',
    summary: 'Brasileira foi eleita a melhor jogadora do mundo pela FIFA em 2023',
    content:
      'Marta Vieira da Silva foi eleita a melhor jogadora do mundo pela FIFA pela sexta vez em sua carreira. A brasileira, que atualmente joga pelo Flamengo, recebeu o prêmio em cerimônia realizada em Zurique. Marta agradeceu o reconhecimento e destacou a importância do futebol feminino no Brasil.',
    date: '2024-01-05',
    author: 'Redação FIFA',
    source: 'FIFA',
    url: 'https://example.com/news/3',
    image: '/img/placeholder.svg',
    category: 'AWARD',
    tags: ['marta', 'prêmio', 'fifa', 'melhor jogadora'],
  },
  {
    id: '4',
    title: 'Corinthians anuncia contratação de nova atacante',
    summary: 'Time paulista reforça o ataque com jogadora experiente do futebol europeu',
    content:
      'O Corinthians anunciou nesta quarta-feira a contratação de uma nova atacante para o elenco feminino. A jogadora, que vem do futebol europeu, assinou contrato por dois anos e deve estrear no próximo jogo do time. A diretoria do clube destacou a experiência da atleta e sua qualidade técnica.',
    date: '2024-01-12',
    author: 'Redação Corinthians',
    source: 'Corinthians',
    url: 'https://example.com/news/4',
    image: '/img/placeholder.svg',
    category: 'TRANSFER',
    tags: ['corinthians', 'contratação', 'atacante'],
  },
  {
    id: '5',
    title: 'Flamengo inaugura centro de treinamento para futebol feminino',
    summary: 'Clube carioca investe em estrutura dedicada exclusivamente ao futebol feminino',
    content:
      'O Flamengo inaugurou nesta sexta-feira um centro de treinamento dedicado exclusivamente ao futebol feminino. A estrutura conta com campos de grama natural e sintética, vestiários modernos, sala de fisioterapia e academia. O investimento foi de R$ 5 milhões e representa um marco para o futebol feminino no Brasil.',
    date: '2024-01-14',
    author: 'Redação Flamengo',
    source: 'Flamengo',
    url: 'https://example.com/news/5',
    image: '/img/placeholder.svg',
    category: 'TRAINING',
    tags: ['flamengo', 'centro de treinamento', 'investimento'],
  },
];

// Produtos mockados para a loja
export const mockProducts: MockProduct[] = [
  {
    id: '1',
    name: 'Camisa Flamengo Feminino 2024',
    description:
      'Camisa oficial do Flamengo Feminino para a temporada 2024. Tecido de alta qualidade com tecnologia de secagem rápida.',
    price: 199.9,
    image: '/img/placeholder.svg',
    category: 'JERSEY',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Vermelho', 'Branco'],
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Camisa Corinthians Feminino 2024',
    description:
      'Camisa oficial do Corinthians Feminino para a temporada 2024. Design moderno e confortável.',
    price: 189.9,
    image: '/img/placeholder.svg',
    category: 'JERSEY',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Branco'],
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Chuteira Nike Mercurial',
    description:
      'Chuteira de alta performance para futebol feminino. Leve, confortável e com excelente tração.',
    price: 399.9,
    image: '/img/placeholder.svg',
    category: 'ACCESSORY',
    sizes: ['35', '36', '37', '38', '39', '40'],
    colors: ['Rosa', 'Azul', 'Preto'],
    inStock: true,
    featured: false,
  },
  {
    id: '4',
    name: 'Bola Oficial Passa a Bola',
    description:
      'Bola oficial do Passa a Bola, desenvolvida especialmente para o futebol feminino. Qualidade FIFA.',
    price: 149.9,
    image: '/img/placeholder.svg',
    category: 'ACCESSORY',
    sizes: ['Único'],
    colors: ['Branco', 'Rosa'],
    inStock: true,
    featured: true,
  },
  {
    id: '5',
    name: 'Moletom Passa a Bola',
    description:
      'Moletom confortável com o logo do Passa a Bola. Perfeito para treinos e momentos de lazer.',
    price: 89.9,
    image: '/img/placeholder.svg',
    category: 'MERCHANDISE',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Azul', 'Rosa', 'Preto'],
    inStock: true,
    featured: false,
  },
  {
    id: '6',
    name: 'Boné Passa a Bola',
    description: 'Boné ajustável com o logo do Passa a Bola. Proteção solar e estilo esportivo.',
    price: 49.9,
    image: '/img/placeholder.svg',
    category: 'MERCHANDISE',
    sizes: ['Único'],
    colors: ['Azul', 'Rosa', 'Preto'],
    inStock: true,
    featured: false,
  },
];

// Estatísticas gerais mockadas
export const mockStats = {
  totalPlayers: 150,
  totalTeams: 50,
  totalFans: 500,
  totalScouts: 25,
  totalMatches: 200,
  totalGoals: 450,
  averageAge: 26.5,
  mostPopularPosition: 'MF',
  mostActiveTeam: 'Corinthians Feminino',
};
