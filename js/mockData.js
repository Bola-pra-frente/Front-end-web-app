// Mock data para GitHub Pages
const mockData = {
    players: [
        {
            id: '1',
            firstName: 'Marta',
            lastName: 'Vieira da Silva',
            age: 38,
            position: 'FW',
            nationality: 'Brasileira',
            height: 162,
            marketValue: 500000,
            bio: 'Considerada uma das maiores jogadoras de futebol feminino de todos os tempos. Seis vezes eleita melhor jogadora do mundo pela FIFA.',
            stats: {
                goals: 115,
                assists: 45,
                matches: 180,
                yellowCards: 12
            }
        },
        {
            id: '2',
            firstName: 'Debinha',
            lastName: 'Cristina',
            age: 32,
            position: 'FW',
            nationality: 'Brasileira',
            height: 157,
            marketValue: 300000,
            bio: 'Atacante versátil e técnica, conhecida por sua velocidade e finalização precisa.',
            stats: {
                goals: 85,
                assists: 35,
                matches: 150,
                yellowCards: 8
            }
        },
        {
            id: '3',
            firstName: 'Leticia',
            lastName: 'Izidoro',
            age: 31,
            position: 'GK',
            nationality: 'Brasileira',
            height: 175,
            marketValue: 200000,
            bio: 'Goleira experiente e confiável, titular da seleção brasileira.',
            stats: {
                goals: 0,
                assists: 2,
                matches: 120,
                yellowCards: 3
            }
        },
        {
            id: '4',
            firstName: 'Tamires',
            lastName: 'Cássia',
            age: 35,
            position: 'DF',
            nationality: 'Brasileira',
            height: 168,
            marketValue: 180000,
            bio: 'Defensora experiente e líder, conhecida por sua força e liderança em campo.',
            stats: {
                goals: 15,
                assists: 25,
                matches: 200,
                yellowCards: 20
            }
        },
        {
            id: '5',
            firstName: 'Formiga',
            lastName: 'Miraildes',
            age: 46,
            position: 'MF',
            nationality: 'Brasileira',
            height: 162,
            marketValue: 100000,
            bio: 'Meio-campista lendária, recordista de participações em Copas do Mundo.',
            stats: {
                goals: 25,
                assists: 40,
                matches: 250,
                yellowCards: 15
            }
        }
    ],
    
    teams: [
        {
            id: '1',
            name: 'Flamengo Feminino',
            city: 'Rio de Janeiro',
            state: 'RJ',
            country: 'Brasil',
            founded: 2017,
            description: 'Time feminino do Clube de Regatas do Flamengo, uma das principais equipes do futebol feminino brasileiro.',
            website: 'https://flamengo.com.br',
            logo: './img/placeholder.svg',
            colors: {
                primary: '#FF0000',
                secondary: '#000000'
            },
            league: 'Brasileirão Feminino'
        },
        {
            id: '2',
            name: 'Corinthians Feminino',
            city: 'São Paulo',
            state: 'SP',
            country: 'Brasil',
            founded: 2016,
            description: 'Time feminino do Sport Club Corinthians Paulista, campeão da Libertadores Feminina.',
            website: 'https://corinthians.com.br',
            logo: './img/placeholder.svg',
            colors: {
                primary: '#000000',
                secondary: '#FFFFFF'
            },
            league: 'Brasileirão Feminino'
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
            logo: './img/placeholder.svg',
            colors: {
                primary: '#FF0000',
                secondary: '#FFFFFF'
            },
            league: 'Brasileirão Feminino'
        }
    ],
    
    news: [
        {
            id: '1',
            title: 'Seleção Brasileira anuncia lista para amistosos',
            summary: 'Lista de 23 jogadoras convocadas para os amistosos contra Argentina e Chile.',
            content: 'A seleção brasileira feminina de futebol anunciou nesta segunda-feira a lista de 23 jogadoras convocadas para os amistosos contra Argentina e Chile, que serão realizados em janeiro. A lista inclui nomes experientes como Marta, Debinha e Leticia Izidoro, além de algumas novatas que vêm se destacando no cenário nacional.',
            date: '2024-01-10',
            author: 'Redação CBF',
            source: 'CBF',
            url: 'https://example.com/news/1',
            image: './img/placeholder.svg',
            category: 'GENERAL',
            tags: ['seleção', 'convocação', 'amistosos']
        },
        {
            id: '2',
            title: 'Brasileirão Feminino 2024: Calendário oficial divulgado',
            summary: 'CBF divulga calendário oficial do Brasileirão Feminino 2024.',
            content: 'A Confederação Brasileira de Futebol (CBF) divulgou o calendário oficial do Brasileirão Feminino 2024. A competição terá 16 times participantes e começará em março, com a final prevista para dezembro. O formato será de pontos corridos, com todos contra todos em turno e returno.',
            date: '2024-01-08',
            author: 'Redação CBF',
            source: 'CBF',
            url: 'https://example.com/news/2',
            image: './img/placeholder.svg',
            category: 'GAME',
            tags: ['brasileirão', 'calendário', '2024']
        },
        {
            id: '3',
            title: 'Marta é eleita melhor jogadora do mundo pela FIFA',
            summary: 'Brasileira recebe o prêmio pela sexta vez em sua carreira.',
            content: 'Marta Vieira da Silva foi eleita a melhor jogadora do mundo pela FIFA pela sexta vez em sua carreira. A brasileira, que atualmente joga pelo Flamengo, recebeu o prêmio em cerimônia realizada em Zurique. Marta agradeceu o reconhecimento e destacou a importância do futebol feminino no Brasil.',
            date: '2024-01-05',
            author: 'Redação FIFA',
            source: 'FIFA',
            url: 'https://example.com/news/3',
            image: './img/placeholder.svg',
            category: 'AWARD',
            tags: ['marta', 'prêmio', 'fifa', 'melhor jogadora']
        }
    ],
    
    products: [
        {
            id: '1',
            name: 'Camisa Flamengo Feminino 2024',
            description: 'Camisa oficial do Flamengo Feminino para a temporada 2024. Tecido de alta qualidade com tecnologia de secagem rápida.',
            price: 199.9,
            image: './img/placeholder.svg',
            category: 'JERSEY',
            sizes: ['P', 'M', 'G', 'GG'],
            colors: ['Vermelho', 'Branco'],
            inStock: true,
            featured: true
        },
        {
            id: '2',
            name: 'Camisa Corinthians Feminino 2024',
            description: 'Camisa oficial do Corinthians Feminino para a temporada 2024. Design moderno e confortável.',
            price: 189.9,
            image: './img/placeholder.svg',
            category: 'JERSEY',
            sizes: ['P', 'M', 'G', 'GG'],
            colors: ['Preto', 'Branco'],
            inStock: true,
            featured: true
        },
        {
            id: '3',
            name: 'Chuteira Nike Mercurial',
            description: 'Chuteira de alta performance para futebol feminino. Leve, confortável e com excelente tração.',
            price: 399.9,
            image: './img/placeholder.svg',
            category: 'ACCESSORY',
            sizes: ['35', '36', '37', '38', '39', '40'],
            colors: ['Rosa', 'Azul', 'Preto'],
            inStock: true,
            featured: false
        }
    ]
};
