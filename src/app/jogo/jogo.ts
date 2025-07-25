import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PlayerStats {
  pontuacao: number;
  nivel: number;
  acertos: number;
  tentativas: number;
  sequencia: number;
}

interface Question {
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
  explicacao: string;
  dica?: string;
  imagem?: string;
  pontos: number;
}

interface Game {
  id: string;
  titulo: string;
  perguntas: Question[];
}

interface LeaderboardPlayer {
  nome: string;
  nivel: number;
  pontuacao: number;
}

interface DailyChallenge {
  titulo: string;
  descricao: string;
  icon: string;
  recompensa: number;
  completado: boolean;
}

@Component({
  selector: 'app-jogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jogo.html',
  styleUrl: './jogo.css'
})
export class JogoComponent implements OnInit, OnDestroy {
  playerStats: PlayerStats = {
    pontuacao: 1250,
    nivel: 3,
    acertos: 45,
    tentativas: 52,
    sequencia: 7
  };

  gameActive = false;
  showGameResults = false;
  showResult = false;
  showHint = false;
  
  currentGame: Game = {} as Game;
  currentQuestionIndex = 0;
  currentQuestion: Question = {} as Question;
  selectedAnswer: number | null = null;
  lastAnswerCorrect = false;
  lastPointsEarned = 0;
  
  gameScore = 0;
  gameTime = 0;
  gameTimer: any;
  
  finalScore = 0;
  correctAnswers = 0;
  totalQuestions = 0;
  totalTime = 0;
  knowledgeCapsule = '';

  leaderboard: LeaderboardPlayer[] = [
    { nome: 'AstroExplorer', nivel: 5, pontuacao: 2850 },
    { nome: 'StarGazer', nivel: 4, pontuacao: 2340 },
    { nome: 'CosmicHunter', nivel: 4, pontuacao: 2120 },
    { nome: 'Você', nivel: 3, pontuacao: 1250 },
    { nome: 'SkyWatcher', nivel: 3, pontuacao: 1180 }
  ];

  dailyChallenge: DailyChallenge = {
    titulo: 'Caçador de Constelações',
    descricao: 'Identifique 5 constelações visíveis no céu de Salvador hoje à noite',
    icon: '🌟',
    recompensa: 200,
    completado: false
  };

  games = {
    navegacao: {
      id: 'navegacao',
      titulo: 'Quiz de Navegação Estelar',
      perguntas: [
        {
          pergunta: 'Qual constelação é conhecida como "Cruzeiro do Sul" e é visível no hemisfério sul?',
          opcoes: ['Ursa Maior', 'Crux', 'Órion', 'Cassiopeia'],
          respostaCorreta: 1,
          explicacao: 'A constelação Crux, conhecida como Cruzeiro do Sul, é uma das menores constelações, mas muito importante para navegação no hemisfério sul.',
          dica: 'É uma constelação pequena mas muito importante para navegação.',
          pontos: 100,
          imagem: '<div class="constellation-map">🌟<br/>⭐&nbsp;&nbsp;&nbsp;✨<br/>&nbsp;&nbsp;🌟<br/>⭐</div>'
        },
        {
          pergunta: 'Em que direção você deve olhar para encontrar a Estrela Polar no hemisfério norte?',
          opcoes: ['Sul', 'Norte', 'Leste', 'Oeste'],
          respostaCorreta: 1,
          explicacao: 'A Estrela Polar (Polaris) está localizada quase exatamente no polo norte celeste, por isso sempre aponta para o norte.',
          dica: 'Pense no nome da estrela...',
          pontos: 80
        },
        {
          pergunta: 'Qual planeta é conhecido como "Estrela da Manhã" ou "Estrela da Tarde"?',
          opcoes: ['Marte', 'Júpiter', 'Vênus', 'Mercúrio'],
          respostaCorreta: 2,
          explicacao: 'Vênus é o planeta mais brilhante no céu e pode ser visto ao amanhecer ou ao entardecer, daí os apelidos.',
          pontos: 90
        }
      ]
    },
    identificacao: {
      id: 'identificacao',
      titulo: 'Caça ao Objeto Celestial',
      perguntas: [
        {
          pergunta: 'Observe o mapa estelar. Qual objeto celestial está destacado?',
          opcoes: ['Nebulosa de Órion', 'Galáxia de Andrômeda', 'Aglomerado das Plêiades', 'Nebulosa do Caranguejo'],
          respostaCorreta: 0,
          explicacao: 'A Nebulosa de Órion (M42) é uma das nebulosas mais brilhantes e facilmente visível a olho nu na constelação de Órion.',
          dica: 'Está localizada na "espada" de uma famosa constelação.',
          pontos: 120,
          imagem: '<div class="nebula-map">🌟&nbsp;&nbsp;⭐<br/>⭐&nbsp;🌌&nbsp;🌟<br/>&nbsp;&nbsp;⭐&nbsp;&nbsp;✨</div>'
        },
        {
          pergunta: 'Qual é a estrela mais brilhante do céu noturno?',
          opcoes: ['Polaris', 'Sirius', 'Vega', 'Arcturus'],
          respostaCorreta: 1,
          explicacao: 'Sirius, na constelação do Cão Maior, é a estrela mais brilhante do céu noturno, com magnitude aparente de -1,46.',
          pontos: 100
        },
        {
          pergunta: 'Quantas estrelas formam a constelação da Ursa Maior?',
          opcoes: ['5 estrelas', '7 estrelas', '9 estrelas', '12 estrelas'],
          respostaCorreta: 1,
          explicacao: 'A Ursa Maior é formada por 7 estrelas principais que formam o famoso "Grande Carro" ou "Big Dipper".',
          dica: 'É o mesmo número de dias da semana.',
          pontos: 110
        }
      ]
    },
    desafio: {
      id: 'desafio',
      titulo: 'Desafio Astronômico Avançado',
      perguntas: [
        {
          pergunta: 'Qual é a distância aproximada da Terra à estrela mais próxima (além do Sol)?',
          opcoes: ['4,2 anos-luz', '25 anos-luz', '100 anos-luz', '1000 anos-luz'],
          respostaCorreta: 0,
          explicacao: 'Proxima Centauri, a estrela mais próxima do Sistema Solar, está a aproximadamente 4,24 anos-luz de distância.',
          pontos: 150
        },
        {
          pergunta: 'O que acontece quando uma estrela com mais de 25 massas solares chega ao fim de sua vida?',
          opcoes: ['Vira uma anã branca', 'Explode como supernova e forma um buraco negro', 'Vira uma estrela de nêutrons', 'Simplesmente se apaga'],
          respostaCorreta: 1,
          explicacao: 'Estrelas muito massivas (>25 massas solares) explodem como supernovas e seu núcleo colapsa formando um buraco negro.',
          dica: 'Pense no destino mais extremo possível.',
          pontos: 180
        },
        {
          pergunta: 'Qual fenômeno permite que detectemos exoplanetas pelo método de trânsito?',
          opcoes: ['Mudança na cor da estrela', 'Diminuição temporária do brilho da estrela', 'Aumento da temperatura da estrela', 'Mudança na posição da estrela'],
          respostaCorreta: 1,
          explicacao: 'Quando um exoplaneta passa na frente de sua estrela (trânsito), causa uma pequena diminuição no brilho observado da estrela.',
          pontos: 160
        }
      ]
    }
  };

  ngOnInit() {
    this.loadPlayerStats();
  }

  ngOnDestroy() {
    if (this.gameTimer) {
      clearInterval(this.gameTimer);
    }
  }

  loadPlayerStats() {
    // Simular carregamento das estatísticas do jogador
    const savedStats = localStorage.getItem('playerStats');
    if (savedStats) {
      this.playerStats = JSON.parse(savedStats);
    }
  }

  savePlayerStats() {
    localStorage.setItem('playerStats', JSON.stringify(this.playerStats));
  }

  startGame(gameType: string) {
    this.gameActive = true;
    this.showGameResults = false;
    this.currentGame = this.games[gameType as keyof typeof this.games];
    this.currentQuestionIndex = 0;
    this.gameScore = 0;
    this.gameTime = 0;
    this.correctAnswers = 0;
    
    this.loadQuestion();
    this.startTimer();
  }

  startTimer() {
    this.gameTimer = setInterval(() => {
      this.gameTime++;
    }, 1000);
  }

  loadQuestion() {
    this.currentQuestion = this.currentGame.perguntas[this.currentQuestionIndex];
    this.selectedAnswer = null;
    this.showResult = false;
    this.showHint = false;
  }

  selectAnswer(index: number) {
    this.selectedAnswer = index;
  }

  toggleHint() {
    this.showHint = true;
    this.gameScore = Math.max(0, this.gameScore - 10);
  }

  submitAnswer() {
    if (this.selectedAnswer === null) return;
    
    this.showResult = true;
    this.lastAnswerCorrect = this.selectedAnswer === this.currentQuestion.respostaCorreta;
    
    if (this.lastAnswerCorrect) {
      this.lastPointsEarned = this.currentQuestion.pontos;
      if (this.showHint) {
        this.lastPointsEarned -= 10;
      }
      this.gameScore += this.lastPointsEarned;
      this.correctAnswers++;
      this.playerStats.sequencia++;
    } else {
      this.lastPointsEarned = 0;
      this.playerStats.sequencia = 0;
    }
    
    this.playerStats.tentativas++;
    if (this.lastAnswerCorrect) {
      this.playerStats.acertos++;
    }
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    
    if (this.currentQuestionIndex >= this.currentGame.perguntas.length) {
      this.finishGame();
    } else {
      this.loadQuestion();
    }
  }

  finishGame() {
    clearInterval(this.gameTimer);
    this.gameActive = false;
    this.showGameResults = true;
    
    this.finalScore = this.gameScore;
    this.totalQuestions = this.currentGame.perguntas.length;
    this.totalTime = this.gameTime;
    
    // Atualizar estatísticas do jogador
    this.playerStats.pontuacao += this.finalScore;
    
    // Verificar se subiu de nível
    const newLevel = Math.floor(this.playerStats.pontuacao / 1000) + 1;
    if (newLevel > this.playerStats.nivel) {
      this.playerStats.nivel = newLevel;
      alert(`🎉 Parabéns! Você subiu para o nível ${newLevel}!`);
    }
    
    this.savePlayerStats();
    this.generateKnowledgeCapsule();
  }

  generateKnowledgeCapsule() {
    const capsules = [
      'Você sabia que a luz das estrelas que vemos hoje pode ter viajado milhares de anos para chegar até nós? Quando olhamos para o céu, estamos literalmente vendo o passado!',
      'A Via Láctea contém entre 200 a 400 bilhões de estrelas, e estima-se que existem mais de 2 trilhões de galáxias no universo observável.',
      'Júpiter atua como um "aspirador de poeira cósmica", protegendo a Terra de muitos asteroides e cometas que poderiam colidir conosco.',
      'A Estrela Polar não é a estrela mais brilhante do céu, mas é extremamente útil para navegação por estar quase alinhada com o eixo de rotação da Terra.',
      'As constelações que vemos hoje são diferentes das que nossos ancestentes viam há milhares de anos, pois as estrelas se movem lentamente pelo espaço.'
    ];
    
    this.knowledgeCapsule = capsules[Math.floor(Math.random() * capsules.length)];
  }

  getPerformanceRating(): string {
    const percentage = (this.correctAnswers / this.totalQuestions) * 100;
    
    if (percentage >= 90) return '🌟 Excelente';
    if (percentage >= 75) return '⭐ Muito Bom';
    if (percentage >= 60) return '✨ Bom';
    if (percentage >= 40) return '💫 Regular';
    return '🌙 Precisa Melhorar';
  }

  playAgain() {
    this.startGame(this.currentGame.id);
  }

  backToModes() {
    this.gameActive = false;
    this.showGameResults = false;
  }

  shareResults() {
    const shareText = `🎮 Acabei de jogar Navegador Estelar!

🏆 Pontuação: ${this.finalScore} pontos
🎯 Acertos: ${this.correctAnswers}/${this.totalQuestions}
⏱️ Tempo: ${this.totalTime}s
📊 Performance: ${this.getPerformanceRating()}

Venha testar seus conhecimentos astronômicos também! 🌟`;

    if (navigator.share) {
      navigator.share({
        title: 'Navegador Estelar - Órbita Pessoal',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('📋 Resultado copiado para a área de transferência!');
      });
    }
  }

  startDailyChallenge() {
    alert(`⚡ Desafio Diário Aceito!

${this.dailyChallenge.titulo}

${this.dailyChallenge.descricao}

🎯 Objetivo: Use um aplicativo de mapa estelar (como Stellarium) para localizar e identificar as constelações visíveis no céu de Salvador hoje à noite.

📝 Como completar:
1. Saia ao ar livre após o pôr do sol
2. Use um aplicativo de astronomia
3. Identifique 5 constelações diferentes
4. Volte aqui e relate suas descobertas

🏆 Recompensa: ${this.dailyChallenge.recompensa} pontos

Em uma implementação completa, isso abriria um formulário para o usuário reportar suas descobertas.`);
  }
}

