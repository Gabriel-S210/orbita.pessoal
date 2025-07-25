import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string;
  fonte: string;
  linkOriginal: string;
  icon: string;
  tags: string[];
}

interface ArtigoBlog {
  id: number;
  titulo: string;
  resumo: string;
  autor: string;
  tempoLeitura: string;
  nivel: string;
  icon: string;
  conteudo: string;
}

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css'
})
export class NoticiasComponent implements OnInit {
  selectedFilter = 'todas';
  newsletterEmail = '';
  
  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Imagem mostra "eclipse lunar" ocorrendo em Saturno',
      resumo: 'Telescópio espacial captura fenômeno raro onde uma das luas de Saturno projeta sombra sobre o planeta.',
      categoria: 'Planetas',
      data: '24/07/2025',
      fonte: 'CNN Brasil',
      linkOriginal: 'https://www.cnnbrasil.com.br/tecnologia/imagem-mostra-eclipse-lunar-ocorrendo-em-saturno-veja/',
      icon: '🪐',
      tags: ['planetas', 'saturno', 'eclipse']
    },
    {
      id: 2,
      titulo: 'Estrelas "imortais" vivem para sempre consumindo matéria escura',
      resumo: 'Novo estudo sugere que algumas estrelas podem se manter "vivas" indefinidamente ao consumir partículas de matéria escura.',
      categoria: 'Estrelas',
      data: '23/07/2025',
      fonte: 'CNN Brasil',
      linkOriginal: 'https://www.cnnbrasil.com.br/tecnologia/estrelas-imortais-vivem-para-sempre-consumindo-materia-escura-diz-estudo/',
      icon: '⭐',
      tags: ['estrelas', 'materia-escura']
    },
    {
      id: 3,
      titulo: 'A Terra está girando mais rápido; por que isso pode ser um problema?',
      resumo: 'Cientistas detectam aceleração na rotação terrestre e investigam possíveis consequências para a tecnologia.',
      categoria: 'Terra',
      data: '22/07/2025',
      fonte: 'CNN Brasil',
      linkOriginal: 'https://www.cnnbrasil.com.br/tecnologia/a-terra-esta-girando-mais-rapido-por-que-isso-pode-ser-um-problema/',
      icon: '🌍',
      tags: ['terra', 'rotacao']
    },
    {
      id: 4,
      titulo: 'Cientistas registram planeta em formação "esculpindo" poeira pela 1ª vez',
      resumo: 'Observação inédita mostra como planetas jovens moldam o disco de poeira ao seu redor durante a formação.',
      categoria: 'Planetas',
      data: '21/07/2025',
      fonte: 'CNN Brasil',
      linkOriginal: 'https://www.cnnbrasil.com.br/tecnologia/cientistas-registram-planeta-em-formacao-esculpindo-poeira-pela-1a-vez/',
      icon: '🪐',
      tags: ['planetas', 'formacao']
    },
    {
      id: 5,
      titulo: 'Maior colisão de buracos negros já registrada intriga cientistas',
      resumo: 'Detectores de ondas gravitacionais captam fusão de buracos negros com massas nunca antes observadas.',
      categoria: 'Buracos Negros',
      data: '16/07/2025',
      fonte: 'CNN Brasil',
      linkOriginal: 'https://www.cnnbrasil.com.br/tecnologia/maior-colisao-de-buracos-negros-ja-registrada-intriga-cientistas/',
      icon: '🕳️',
      tags: ['buracos-negros', 'ondas-gravitacionais']
    },
    {
      id: 6,
      titulo: 'Asteroides "invisíveis" próximos de Vênus podem ameaçar a Terra',
      resumo: 'Pesquisadores identificam população de asteroides difíceis de detectar que podem representar risco futuro.',
      categoria: 'Exploração Espacial',
      data: '15/07/2025',
      fonte: 'CNN Brasil',
      linkOriginal: 'https://www.cnnbrasil.com.br/tecnologia/asteroides-invisiveis-proximos-de-venus-podem-ameacar-a-terra-no-futuro/',
      icon: '🚀',
      tags: ['exploracao', 'asteroides', 'venus']
    }
  ];

  blogArticles: ArtigoBlog[] = [
    {
      id: 1,
      titulo: 'A Dança Cósmica dos Eclipses em Saturno',
      resumo: 'Entenda como os eclipses em outros planetas nos ajudam a compreender a dinâmica dos sistemas planetários.',
      autor: 'Dr. Maria Santos',
      tempoLeitura: '5 min',
      nivel: 'Intermediário',
      icon: '🪐',
      conteudo: 'Artigo completo sobre eclipses em Saturno...'
    },
    {
      id: 2,
      titulo: 'Matéria Escura: O Combustível das Estrelas Eternas?',
      resumo: 'Explore as teorias mais recentes sobre como a matéria escura pode influenciar a evolução estelar.',
      autor: 'Prof. João Silva',
      tempoLeitura: '8 min',
      nivel: 'Avançado',
      icon: '⭐',
      conteudo: 'Artigo completo sobre matéria escura...'
    },
    {
      id: 3,
      titulo: 'Por que a Terra Acelera? Mistérios da Rotação Planetária',
      resumo: 'Descubra os fatores que influenciam a rotação da Terra e suas consequências para nossa vida cotidiana.',
      autor: 'Dra. Ana Costa',
      tempoLeitura: '6 min',
      nivel: 'Iniciante',
      icon: '🌍',
      conteudo: 'Artigo completo sobre rotação terrestre...'
    }
  ];

  filteredNews: Noticia[] = [];

  ngOnInit() {
    this.filteredNews = this.noticias;
  }

  filterNews(categoria: string) {
    this.selectedFilter = categoria;
    
    if (categoria === 'todas') {
      this.filteredNews = this.noticias;
    } else {
      this.filteredNews = this.noticias.filter(noticia => 
        noticia.tags.includes(categoria) || 
        noticia.categoria.toLowerCase().includes(categoria)
      );
    }
  }

  showDetailedSkyInfo() {
    const today = new Date();
    const dateString = today.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    alert(`🌟 Informações Detalhadas do Céu - Salvador, BA
${dateString}

🌙 FASE DA LUA:
• Crescente (iluminação: 65%)
• Nascer: 14:30 | Pôr: 23:45
• Melhor observação: 19h-22h

🪐 PLANETAS VISÍVEIS:
• Júpiter: 21:00-02:00 (magnitude -2.1)
• Saturno: 22:00-04:00 (magnitude 0.8)
• Marte: 05:00-06:30 (magnitude 1.2)

⭐ CONSTELAÇÕES EM DESTAQUE:
• Órion: Visível toda a noite (NO-SO)
• Cruzeiro do Sul: 20h-04h (S-SO)
• Escorpião: 18h-24h (SE-SO)

🛰️ PASSAGENS DA ISS:
• 20:15 - Direção NO-SE (duração: 6 min)
• 21:52 - Direção O-NE (duração: 4 min)

🌠 PRÓXIMOS EVENTOS:
• 12/08: Pico das Perseidas
• 15/08: Lua Cheia
• 20/08: Conjunção Júpiter-Saturno

💡 DICAS DE OBSERVAÇÃO:
• Use aplicativos: Stellarium, SkyView
• Melhor horário: 21h-23h
• Local ideal: Longe de luzes da cidade`);
  }

  saveToFavorites(noticia: Noticia) {
    // Simular salvamento nos favoritos
    alert(`📌 Notícia "${noticia.titulo}" salva nos favoritos!`);
  }

  readArticle(artigo: ArtigoBlog) {
    alert(`📖 Abrindo artigo: "${artigo.titulo}"

${artigo.conteudo}

Este é um exemplo de como o artigo seria exibido. Em uma implementação completa, isso abriria uma página dedicada ou modal com o conteúdo completo do artigo.`);
  }

  shareArticle(artigo: ArtigoBlog) {
    if (navigator.share) {
      navigator.share({
        title: artigo.titulo,
        text: artigo.resumo,
        url: window.location.href
      });
    } else {
      // Fallback para navegadores que não suportam Web Share API
      const shareText = `Confira este artigo: "${artigo.titulo}" - ${artigo.resumo}`;
      navigator.clipboard.writeText(shareText).then(() => {
        alert('📋 Link copiado para a área de transferência!');
      });
    }
  }

  subscribeNewsletter() {
    if (this.newsletterEmail && this.newsletterEmail.includes('@')) {
      alert(`✅ Inscrição realizada com sucesso!

E-mail: ${this.newsletterEmail}

Você receberá diariamente:
• Informações sobre o céu de Salvador
• Fases da lua e posição dos planetas
• Passagens da ISS
• Eventos astronômicos especiais
• Dicas de observação

Bem-vindo à comunidade Órbita Pessoal! 🌟`);
      this.newsletterEmail = '';
    } else {
      alert('❌ Por favor, insira um e-mail válido.');
    }
  }
}

