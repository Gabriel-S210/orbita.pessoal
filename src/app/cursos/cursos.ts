import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface UserProfile {
  nivel: string;
  topicos: string[];
}

interface Topico {
  id: string;
  nome: string;
  icon: string;
}

interface Modulo {
  nome: string;
  icon: string;
  duracao: string;
}

interface Trilha {
  id: number;
  titulo: string;
  descricao: string;
  nivel: string;
  duracao: string;
  modulos: number;
  modulosDetalhados: Modulo[];
  dificuldade: string;
  icon: string;
  progresso: number;
  topicos: string[];
}

interface Certificado {
  id: number;
  nome: string;
  descricao: string;
  icon: string;
  conquistado: boolean;
  progresso: number;
}

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class CursosComponent implements OnInit {
  userProfile: UserProfile = {
    nivel: 'iniciante',
    topicos: []
  };

  selectedLevel = 'todos';

  topicosDisponiveis: Topico[] = [
    { id: 'planetas', nome: 'Planetas', icon: '🪐' },
    { id: 'estrelas', nome: 'Estrelas', icon: '⭐' },
    { id: 'galaxias', nome: 'Galáxias', icon: '🌌' },
    { id: 'buracos-negros', nome: 'Buracos Negros', icon: '🕳️' },
    { id: 'astrofotografia', nome: 'Astrofotografia', icon: '📸' },
    { id: 'exploracao', nome: 'Exploração Espacial', icon: '🚀' },
    { id: 'cosmologia', nome: 'Cosmologia', icon: '🌠' },
    { id: 'sistema-solar', nome: 'Sistema Solar', icon: '☀️' }
  ];

  trilhas: Trilha[] = [
    {
      id: 1,
      titulo: 'Astronomia Inicial - Primeiros Passos no Universo',
      descricao: 'Introdução completa à astronomia para iniciantes, cobrindo conceitos básicos e observação do céu.',
      nivel: 'Iniciante',
      duracao: '4 semanas',
      modulos: 6,
      modulosDetalhados: [
        { nome: 'O que é Astronomia?', icon: '🔭', duracao: '45 min' },
        { nome: 'Sistema Solar', icon: '☀️', duracao: '60 min' },
        { nome: 'Estrelas e Constelações', icon: '⭐', duracao: '50 min' },
        { nome: 'Observação do Céu', icon: '🌙', duracao: '40 min' },
        { nome: 'Instrumentos Básicos', icon: '🔍', duracao: '35 min' },
        { nome: 'Projeto Final', icon: '📋', duracao: '90 min' }
      ],
      dificuldade: 'Fácil',
      icon: '🌱',
      progresso: 0,
      topicos: ['sistema-solar', 'estrelas']
    },
    {
      id: 2,
      titulo: 'Desvendando o Sistema Solar',
      descricao: 'Explore em detalhes todos os planetas, luas e corpos menores do nosso sistema solar.',
      nivel: 'Iniciante',
      duracao: '6 semanas',
      modulos: 8,
      modulosDetalhados: [
        { nome: 'Formação do Sistema Solar', icon: '🌪️', duracao: '55 min' },
        { nome: 'Planetas Rochosos', icon: '🪨', duracao: '70 min' },
        { nome: 'Gigantes Gasosos', icon: '🪐', duracao: '65 min' },
        { nome: 'Luas e Satélites', icon: '🌙', duracao: '60 min' },
        { nome: 'Asteroides e Cometas', icon: '☄️', duracao: '45 min' },
        { nome: 'Exploração Espacial', icon: '🚀', duracao: '80 min' },
        { nome: 'Vida no Sistema Solar?', icon: '👽', duracao: '50 min' },
        { nome: 'Futuro da Exploração', icon: '🛸', duracao: '40 min' }
      ],
      dificuldade: 'Fácil',
      icon: '🪐',
      progresso: 25,
      topicos: ['planetas', 'sistema-solar', 'exploracao']
    },
    {
      id: 3,
      titulo: 'Fundamentos da Astrofotografia para Iniciantes',
      descricao: 'Aprenda a capturar imagens incríveis do céu noturno com equipamentos básicos.',
      nivel: 'Amador',
      duracao: '8 semanas',
      modulos: 10,
      modulosDetalhados: [
        { nome: 'Equipamentos Básicos', icon: '📷', duracao: '60 min' },
        { nome: 'Configurações da Câmera', icon: '⚙️', duracao: '75 min' },
        { nome: 'Planejamento de Sessões', icon: '📅', duracao: '45 min' },
        { nome: 'Fotografando a Lua', icon: '🌙', duracao: '90 min' },
        { nome: 'Planetas e Objetos Brilhantes', icon: '🪐', duracao: '85 min' },
        { nome: 'Deep Sky - Nebulosas', icon: '🌌', duracao: '100 min' },
        { nome: 'Processamento Básico', icon: '💻', duracao: '120 min' },
        { nome: 'Técnicas Avançadas', icon: '🎯', duracao: '95 min' },
        { nome: 'Compartilhando suas Fotos', icon: '📤', duracao: '30 min' },
        { nome: 'Projeto Portfolio', icon: '🖼️', duracao: '180 min' }
      ],
      dificuldade: 'Médio',
      icon: '📸',
      progresso: 0,
      topicos: ['astrofotografia', 'planetas', 'galaxias']
    },
    {
      id: 4,
      titulo: 'A Cosmologia por Trás dos Buracos Negros',
      descricao: 'Mergulhe na física extrema dos buracos negros e suas implicações cosmológicas.',
      nivel: 'Avançado',
      duracao: '10 semanas',
      modulos: 12,
      modulosDetalhados: [
        { nome: 'Relatividade Geral Básica', icon: '🧮', duracao: '120 min' },
        { nome: 'Formação de Buracos Negros', icon: '💥', duracao: '90 min' },
        { nome: 'Horizonte de Eventos', icon: '🌀', duracao: '85 min' },
        { nome: 'Radiação Hawking', icon: '⚡', duracao: '100 min' },
        { nome: 'Tipos de Buracos Negros', icon: '🕳️', duracao: '95 min' },
        { nome: 'Detecção e Observação', icon: '🔭', duracao: '110 min' },
        { nome: 'Ondas Gravitacionais', icon: '〰️', duracao: '105 min' },
        { nome: 'Buracos Negros Supermassivos', icon: '🌌', duracao: '115 min' },
        { nome: 'Paradoxos e Teorias', icon: '🤔', duracao: '130 min' },
        { nome: 'Impacto na Cosmologia', icon: '🌠', duracao: '140 min' },
        { nome: 'Pesquisas Atuais', icon: '🔬', duracao: '120 min' },
        { nome: 'Seminário Final', icon: '🎓', duracao: '180 min' }
      ],
      dificuldade: 'Difícil',
      icon: '🕳️',
      progresso: 0,
      topicos: ['buracos-negros', 'cosmologia']
    },
    {
      id: 5,
      titulo: 'Vida no Universo - Astrobiologia',
      descricao: 'Explore as possibilidades de vida além da Terra e os métodos para detectá-la.',
      nivel: 'Amador',
      duracao: '7 semanas',
      modulos: 9,
      modulosDetalhados: [
        { nome: 'Origem da Vida na Terra', icon: '🧬', duracao: '80 min' },
        { nome: 'Zona Habitável', icon: '🌍', duracao: '70 min' },
        { nome: 'Exoplanetas', icon: '🪐', duracao: '90 min' },
        { nome: 'Biossinaturas', icon: '🔬', duracao: '85 min' },
        { nome: 'Missões de Busca', icon: '🚀', duracao: '95 min' },
        { nome: 'SETI e Comunicação', icon: '📡', duracao: '75 min' },
        { nome: 'Vida Extremófila', icon: '🦠', duracao: '65 min' },
        { nome: 'Futuro da Astrobiologia', icon: '🔮', duracao: '60 min' },
        { nome: 'Debate e Reflexões', icon: '💭', duracao: '120 min' }
      ],
      dificuldade: 'Médio',
      icon: '👽',
      progresso: 60,
      topicos: ['exploracao', 'planetas']
    },
    {
      id: 6,
      titulo: 'Evolução Estelar - Do Nascimento à Morte das Estrelas',
      descricao: 'Compreenda o ciclo de vida completo das estrelas e os fenômenos associados.',
      nivel: 'Amador',
      duracao: '9 semanas',
      modulos: 11,
      modulosDetalhados: [
        { nome: 'Formação Estelar', icon: '🌟', duracao: '85 min' },
        { nome: 'Sequência Principal', icon: '⭐', duracao: '90 min' },
        { nome: 'Fusão Nuclear', icon: '⚛️', duracao: '100 min' },
        { nome: 'Gigantes Vermelhas', icon: '🔴', duracao: '80 min' },
        { nome: 'Nebulosas Planetárias', icon: '💫', duracao: '75 min' },
        { nome: 'Anãs Brancas', icon: '⚪', duracao: '70 min' },
        { nome: 'Supernovas', icon: '💥', duracao: '95 min' },
        { nome: 'Estrelas de Nêutrons', icon: '🌀', duracao: '85 min' },
        { nome: 'Pulsares', icon: '📡', duracao: '80 min' },
        { nome: 'Sistemas Binários', icon: '👥', duracao: '90 min' },
        { nome: 'Observação Estelar', icon: '🔭', duracao: '110 min' }
      ],
      dificuldade: 'Médio',
      icon: '⭐',
      progresso: 0,
      topicos: ['estrelas', 'cosmologia']
    }
  ];

  certificados: Certificado[] = [
    {
      id: 1,
      nome: 'Explorador Cósmico',
      descricao: 'Complete sua primeira trilha de astronomia',
      icon: '🌟',
      conquistado: false,
      progresso: 25
    },
    {
      id: 2,
      nome: 'Fotógrafo Estelar',
      descricao: 'Domine os fundamentos da astrofotografia',
      icon: '📸',
      conquistado: false,
      progresso: 0
    },
    {
      id: 3,
      nome: 'Especialista em Buracos Negros',
      descricao: 'Complete o curso avançado de cosmologia',
      icon: '🕳️',
      conquistado: false,
      progresso: 0
    },
    {
      id: 4,
      nome: 'Caçador de Vida',
      descricao: 'Finalize o curso de astrobiologia',
      icon: '👽',
      conquistado: true,
      progresso: 100
    }
  ];

  trilhasRecomendadas: Trilha[] = [];
  filteredTracks: Trilha[] = [];

  ngOnInit() {
    this.loadUserProfile();
    this.updateRecommendations();
    this.filteredTracks = this.trilhas;
  }

  loadUserProfile() {
    // Simular carregamento do perfil do localStorage
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      this.userProfile = JSON.parse(savedProfile);
    }
  }

  toggleTopic(topicId: string) {
    const index = this.userProfile.topicos.indexOf(topicId);
    if (index > -1) {
      this.userProfile.topicos.splice(index, 1);
    } else {
      this.userProfile.topicos.push(topicId);
    }
    this.updateRecommendations();
  }

  updateRecommendations() {
    // Filtrar trilhas baseadas no perfil do usuário
    this.trilhasRecomendadas = this.trilhas.filter(trilha => {
      const nivelMatch = trilha.nivel.toLowerCase() === this.userProfile.nivel;
      const topicoMatch = trilha.topicos.some(topico => 
        this.userProfile.topicos.includes(topico)
      );
      return nivelMatch || topicoMatch;
    }).slice(0, 4); // Limitar a 4 recomendações
  }

  saveProfile() {
    localStorage.setItem('userProfile', JSON.stringify(this.userProfile));
    alert(`✅ Perfil salvo com sucesso!

Nível: ${this.userProfile.nivel}
Tópicos: ${this.userProfile.topicos.length} selecionados

Suas recomendações foram atualizadas! 🌟`);
  }

  filterByLevel(level: string) {
    this.selectedLevel = level;
    
    if (level === 'todos') {
      this.filteredTracks = this.trilhas;
    } else {
      this.filteredTracks = this.trilhas.filter(trilha => 
        trilha.nivel.toLowerCase() === level
      );
    }
  }

  startTrack(trilha: Trilha) {
    alert(`🚀 Iniciando trilha: "${trilha.titulo}"

📚 Módulos: ${trilha.modulos}
⏱️ Duração: ${trilha.duracao}
📊 Dificuldade: ${trilha.dificuldade}

${trilha.progresso > 0 ? 
  `Você já completou ${trilha.progresso}% desta trilha. Continuando de onde parou...` : 
  'Bem-vindo à sua nova jornada de aprendizado!'
}

Em uma implementação completa, isso abriria o primeiro módulo da trilha.`);
  }

  viewTrackDetails(trilha: Trilha) {
    const modulosList = trilha.modulosDetalhados
      .map((modulo, index) => `${index + 1}. ${modulo.icon} ${modulo.nome} (${modulo.duracao})`)
      .join('\n');

    alert(`📋 Detalhes da Trilha: "${trilha.titulo}"

📝 Descrição:
${trilha.descricao}

📚 Módulos (${trilha.modulos}):
${modulosList}

⏱️ Duração Total: ${trilha.duracao}
📊 Dificuldade: ${trilha.dificuldade}
🎯 Nível: ${trilha.nivel}

${trilha.progresso > 0 ? `📈 Progresso atual: ${trilha.progresso}%` : '🆕 Trilha não iniciada'}`);
  }

  openARMode() {
    alert(`📱 Modo Realidade Aumentada

Para usar este recurso:

1. 📲 Permita acesso à câmera do dispositivo
2. 🌙 Aponte para o céu noturno
3. 🔍 Toque nos objetos identificados para mais informações
4. 📚 Acesse cursos relacionados diretamente

Recursos disponíveis:
• ⭐ Identificação de constelações
• 🪐 Informações sobre planetas visíveis
• 🛰️ Rastreamento da ISS
• 🌙 Fases da lua em tempo real

Em uma implementação completa, isso ativaria a câmera e o sistema de AR.`);
  }

  viewLocalEvents() {
    alert(`📅 Eventos Astronômicos em Salvador - Próximos 30 dias

🏛️ OBSERVATÓRIO NACIONAL:
• 28/07 - Observação de Saturno (19h-22h)
• 02/08 - Palestra: "Buracos Negros" (20h)
• 15/08 - Noite da Lua Cheia (18h-23h)

🎓 UNIVERSIDADES:
• UFBA - Workshop de Astrofotografia (05/08)
• UEFS - Curso de Extensão: Sistema Solar (10/08)

👥 GRUPOS AMADORES:
• Clube de Astronomia da Bahia
  - Encontro mensal: 12/08 (Parque da Cidade)
• AstroBahia - Observação pública: 20/08

🌠 EVENTOS ESPECIAIS:
• Chuva de meteoros Perseidas (12/08)
• Conjunção Júpiter-Saturno (25/08)

📍 Locais recomendados para observação em Salvador:
• Farol da Barra
• Parque Metropolitano de Pituaçu
• Praia do Flamengo`);
  }

  openSimulator() {
    alert(`🌌 Simulador Interativo 3D

Recursos disponíveis:

🪐 SISTEMA SOLAR:
• Navegação livre entre planetas
• Visualização de órbitas em tempo real
• Informações detalhadas de cada corpo celeste

⭐ EXPLORAÇÃO ESTELAR:
• Viagem entre sistemas estelares próximos
• Visualização de diferentes tipos de estrelas
• Simulação de evolução estelar

🌌 GALÁXIAS:
• Exploração da Via Láctea
• Visualização de outras galáxias
• Simulação de colisões galácticas

🕳️ FENÔMENOS EXTREMOS:
• Buracos negros e distorção do espaço-tempo
• Supernovas e explosões estelares
• Ondas gravitacionais

Controles:
• 🖱️ Mouse: Rotação da câmera
• ⌨️ WASD: Movimento
• 🔍 Scroll: Zoom
• 📱 Touch: Navegação em dispositivos móveis

Em uma implementação completa, isso abriria um ambiente 3D interativo.`);
  }

  openLibrary() {
    alert(`📚 Biblioteca de Recursos Astronômicos

📖 ARTIGOS CIENTÍFICOS:
• Base de dados com +1000 artigos
• Filtros por tópico e nível de dificuldade
• Traduções e resumos em português

🎥 VÍDEOS EDUCACIONAIS:
• Documentários da NASA, ESA
• Palestras de especialistas
• Animações explicativas

📊 DADOS E SIMULAÇÕES:
• Catálogos de estrelas e galáxias
• Dados de missões espaciais
• Simuladores online

🔗 LINKS ÚTEIS:
• Sites de observatórios mundiais
• Aplicativos de astronomia
• Comunidades online

📱 APLICATIVOS RECOMENDADOS:
• Stellarium (mapa estelar)
• SkySafari (observação)
• NASA App (missões e descobertas)
• Star Walk (realidade aumentada)

🎯 ORGANIZAÇÃO POR TÓPICOS:
Todos os recursos são categorizados pelos mesmos tópicos dos cursos para facilitar o estudo complementar.

Em uma implementação completa, isso abriria uma biblioteca digital organizada.`);
  }
}

