import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/utils/password';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Criar usuário admin padrão
  console.log('👤 Criando usuário admin...');
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@passa.com' },
    update: {},
    create: {
      email: 'admin@passa.com',
      passwordHash: await hashPassword('admin123'),
      role: 'ADMIN',
      profile: {
        create: {
          firstName: 'Admin',
          lastName: 'Passa a Bola',
          bio: 'Administrador da plataforma Passa a Bola',
          phone: '+55 11 99999-9999',
          location: 'São Paulo, SP',
        },
      },
    },
  });

  // Criar usuário de demonstração (atleta)
  console.log('⚽ Criando usuário atleta de demonstração...');
  const athleteUser = await prisma.user.upsert({
    where: { email: 'atleta@demo.com' },
    update: {},
    create: {
      email: 'atleta@demo.com',
      passwordHash: await hashPassword('demo123'),
      role: 'ATHLETE',
      profile: {
        create: {
          firstName: 'Maria',
          lastName: 'Silva',
          bio: 'Jogadora profissional de futebol feminino',
          phone: '+55 11 88888-8888',
          location: 'São Paulo, SP',
          position: 'MF',
          age: 24,
          height: 165,
          weight: 58,
          dominantFoot: 'RIGHT',
        },
      },
    },
  });

  // Criar usuário olheiro de demonstração
  console.log('🔍 Criando usuário olheiro de demonstração...');
  const scoutUser = await prisma.user.upsert({
    where: { email: 'olheiro@demo.com' },
    update: {},
    create: {
      email: 'olheiro@demo.com',
      passwordHash: await hashPassword('demo123'),
      role: 'SCOUT',
      profile: {
        create: {
          firstName: 'João',
          lastName: 'Santos',
          bio: 'Olheiro profissional com 10 anos de experiência',
          phone: '+55 11 77777-7777',
          location: 'Rio de Janeiro, RJ',
          company: 'Agência de Talentos',
          experience: 10,
        },
      },
    },
  });

  // Criar usuário fã de demonstração
  console.log('❤️ Criando usuário fã de demonstração...');
  const fanUser = await prisma.user.upsert({
    where: { email: 'fan@demo.com' },
    update: {},
    create: {
      email: 'fan@demo.com',
      passwordHash: await hashPassword('demo123'),
      role: 'FAN',
      profile: {
        create: {
          firstName: 'Ana',
          lastName: 'Costa',
          bio: 'Fã apaixonada pelo futebol feminino',
          phone: '+55 11 66666-6666',
          location: 'Belo Horizonte, MG',
        },
      },
    },
  });

  // Criar times
  console.log('🏆 Criando times...');
  const team1 = await prisma.team.upsert({
    where: { name: 'Leonas FC' },
    update: {},
    create: {
      name: 'Leonas FC',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brasil',
      founded: 2015,
      description: 'Time de futebol feminino com foco no desenvolvimento de jovens atletas',
      website: 'https://leonasfc.com.br',
    },
  });

  const team2 = await prisma.team.upsert({
    where: { name: 'Auroras SC' },
    update: {},
    create: {
      name: 'Auroras SC',
      city: 'Rio de Janeiro',
      state: 'RJ',
      country: 'Brasil',
      founded: 2018,
      description: 'Clube tradicional com equipe feminina em ascensão',
      website: 'https://aurorassc.com.br',
    },
  });

  const team3 = await prisma.team.upsert({
    where: { name: 'Estrelas FC' },
    update: {},
    create: {
      name: 'Estrelas FC',
      city: 'Belo Horizonte',
      state: 'MG',
      country: 'Brasil',
      founded: 2020,
      description: 'Time jovem com grande potencial e ambições',
      website: 'https://estrelasfc.com.br',
    },
  });

  const team4 = await prisma.team.upsert({
    where: { name: 'Dragões Feminino' },
    update: {},
    create: {
      name: 'Dragões Feminino',
      city: 'Porto Alegre',
      state: 'RS',
      country: 'Brasil',
      founded: 2012,
      description: 'Uma das equipes mais tradicionais do futebol feminino brasileiro',
    },
  });

  const team5 = await prisma.team.upsert({
    where: { name: 'Fênix FC' },
    update: {},
    create: {
      name: 'Fênix FC',
      city: 'Salvador',
      state: 'BA',
      country: 'Brasil',
      founded: 2019,
      description: 'Time em reconstrução com foco no futuro',
    },
  });

  // Atualizar perfil da atleta para associar ao time
  await prisma.profile.update({
    where: { userId: athleteUser.id },
    data: { teamId: team1.id },
  });

  // Criar jogadoras de exemplo
  console.log('⚽ Criando jogadoras de exemplo...');
  const playersData = [
    // Leonas FC
    {
      firstName: 'Carla',
      lastName: 'Oliveira',
      position: 'GK',
      age: 26,
      height: 175,
      weight: 68,
      dominantFoot: 'RIGHT',
      teamId: team1.id,
      bio: 'Goleira experiente com grande reflexo',
    },
    {
      firstName: 'Fernanda',
      lastName: 'Rodrigues',
      position: 'DF',
      age: 23,
      height: 168,
      weight: 62,
      dominantFoot: 'LEFT',
      teamId: team1.id,
      bio: 'Zagueira sólida e líder da defesa',
    },
    {
      firstName: 'Patricia',
      lastName: 'Lima',
      position: 'MF',
      age: 25,
      height: 162,
      weight: 58,
      dominantFoot: 'RIGHT',
      teamId: team1.id,
      bio: 'Meio-campista criativa e técnica',
    },
    {
      firstName: 'Juliana',
      lastName: 'Ferreira',
      position: 'FW',
      age: 22,
      height: 165,
      weight: 60,
      dominantFoot: 'RIGHT',
      teamId: team1.id,
      bio: 'Atacante veloz e finalizadora',
    },

    // Auroras SC
    {
      firstName: 'Roberta',
      lastName: 'Alves',
      position: 'GK',
      age: 28,
      height: 172,
      weight: 65,
      dominantFoot: 'RIGHT',
      teamId: team2.id,
      bio: 'Goleira veterana com muita experiência',
    },
    {
      firstName: 'Camila',
      lastName: 'Santos',
      position: 'DF',
      age: 24,
      height: 170,
      weight: 64,
      dominantFoot: 'RIGHT',
      teamId: team2.id,
      bio: 'Lateral-direita ofensiva e defensiva',
    },
    {
      firstName: 'Beatriz',
      lastName: 'Costa',
      position: 'MF',
      age: 26,
      height: 160,
      weight: 55,
      dominantFoot: 'LEFT',
      teamId: team2.id,
      bio: 'Volante de marcação e distribuição',
    },

    // Estrelas FC
    {
      firstName: 'Larissa',
      lastName: 'Martins',
      position: 'FW',
      age: 20,
      height: 168,
      weight: 61,
      dominantFoot: 'RIGHT',
      teamId: team3.id,
      bio: 'Jovem promessa do ataque',
    },
    {
      firstName: 'Gabriela',
      lastName: 'Ribeiro',
      position: 'MF',
      age: 21,
      height: 163,
      weight: 57,
      dominantFoot: 'BOTH',
      teamId: team3.id,
      bio: 'Meio-campista ambidestra e versátil',
    },

    // Dragões Feminino
    {
      firstName: 'Mariana',
      lastName: 'Pereira',
      position: 'DF',
      age: 29,
      height: 174,
      weight: 67,
      dominantFoot: 'RIGHT',
      teamId: team4.id,
      bio: 'Capitã experiente e líder nata',
    },
  ];

  for (const playerData of playersData) {
    const user = await prisma.user.create({
      data: {
        email: `${playerData.firstName.toLowerCase()}.${playerData.lastName.toLowerCase()}@demo.com`,
        passwordHash: await hashPassword('demo123'),
        role: 'ATHLETE',
        profile: {
          create: playerData,
        },
      },
    });
  }

  // Criar produtos da loja
  console.log('🛒 Criando produtos da loja...');
  const productsData = [
    {
      name: 'Camisa Passa a Bola',
      description: 'Camisa oficial da plataforma com design exclusivo e tecido de alta qualidade',
      price: 89.9,
      category: 'CLOTHING',
      stock: 50,
      featured: true,
    },
    {
      name: 'Bola Oficial Passa a Bola',
      description: 'Bola de futebol oficial com design personalizado da plataforma',
      price: 149.9,
      category: 'EQUIPMENT',
      stock: 30,
      featured: true,
    },
    {
      name: 'Boné Passa a Bola',
      description: 'Boné ajustável com logo da plataforma em bordado',
      price: 49.9,
      category: 'ACCESSORIES',
      stock: 100,
      featured: false,
    },
    {
      name: 'Mochila Esportiva',
      description: 'Mochila resistente e prática para treinos e jogos',
      price: 129.9,
      category: 'ACCESSORIES',
      stock: 25,
      featured: false,
    },
    {
      name: 'Garrafa Esportiva',
      description: 'Garrafa térmica para hidratação durante treinos',
      price: 39.9,
      category: 'ACCESSORIES',
      stock: 75,
      featured: false,
    },
    {
      name: 'Troféu Personalizado',
      description: 'Troféu para campeonatos e torneios',
      price: 199.9,
      category: 'MEMORABILIA',
      stock: 10,
      featured: true,
    },
  ];

  for (const productData of productsData) {
    await prisma.product.create({
      data: productData,
    });
  }

  // Criar alguns posts de exemplo
  console.log('📝 Criando posts de exemplo...');
  const postsData = [
    {
      title: 'Bem-vindas à nova temporada!',
      content:
        'Estamos muito animadas para começar mais uma temporada. Muito trabalho pela frente e muitos sonhos para realizar!',
      authorId: athleteUser.id,
      teamId: team1.id,
    },
    {
      title: 'Novo talento descoberto',
      content:
        'Tivemos o prazer de descobrir uma nova jogadora que promete muito. O futuro do futebol feminino está em boas mãos!',
      authorId: scoutUser.id,
    },
    {
      title: 'Partida histórica',
      content:
        'Que jogo incrível ontem! Parabéns a todas as atletas que deram o melhor de si em campo.',
      authorId: fanUser.id,
    },
  ];

  for (const postData of postsData) {
    await prisma.post.create({
      data: postData,
    });
  }

  console.log('✅ Seed concluído com sucesso!');
  console.log('\n📋 Resumo do que foi criado:');
  console.log('- 4 usuários de demonstração (admin, atleta, olheiro, fã)');
  console.log('- 5 times de futebol feminino');
  console.log('- 11 jogadoras cadastradas');
  console.log('- 6 produtos na loja');
  console.log('- 3 posts de exemplo');

  console.log('\n🔑 Credenciais de acesso:');
  console.log('Admin: admin@passa.com / admin123');
  console.log('Atleta: atleta@demo.com / demo123');
  console.log('Olheiro: olheiro@demo.com / demo123');
  console.log('Fã: fan@demo.com / demo123');
}

main()
  .catch(e => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
