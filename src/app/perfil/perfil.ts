import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class PerfilComponent implements OnInit {
  isLoggedIn = false;
  
  userProfile = {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    avatar: '',
    memberSince: new Date('2024-01-15'),
    level: 'amador',
    interests: {
      planetas: true,
      estrelas: true,
      galaxias: false,
      buracos_negros: true,
      astrofotografia: false,
      exploracao_espacial: true
    },
    location: {
      city: 'Salvador',
      state: 'BA'
    },
    notifications: {
      eventos: true,
      iss: true,
      noticias: false,
      cursos: true
    }
  };

  userStats = {
    cursosCompletos: 3,
    jogosPontuacao: 1250,
    diasAtivo: 45,
    noticiasLidas: 28
  };

  ngOnInit() {
    // Simular verificação de login
    // Em uma implementação real, verificaria o token de autenticação
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    // Simular usuário logado para demonstração
    // this.isLoggedIn = false;
    this.isLoggedIn = true; // Para demonstração
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  loginWithGoogle() {
    alert('🚀 Login com Google será implementado!\n\nEsta funcionalidade requer:\n• Configuração do Google OAuth\n• Integração com Firebase Auth\n• Backend para gerenciar sessões');
    // Simular login bem-sucedido
    this.isLoggedIn = true;
  }

  loginWithFacebook() {
    alert('🚀 Login com Facebook será implementado!\n\nEsta funcionalidade requer:\n• Configuração do Facebook SDK\n• Integração com Firebase Auth\n• Backend para gerenciar sessões');
    // Simular login bem-sucedido
    this.isLoggedIn = true;
  }

  editProfile() {
    alert('✏️ Funcionalidade de edição será implementada!\n\nPermitirá editar:\n• Nome e foto de perfil\n• Informações pessoais\n• Configurações avançadas');
  }

  saveProfile() {
    // Simular salvamento
    alert('💾 Perfil salvo com sucesso!\n\nSuas preferências foram atualizadas e serão aplicadas na próxima navegação.');
    
    // Em uma implementação real, enviaria os dados para o backend
    console.log('Salvando perfil:', this.userProfile);
  }

  exportData() {
    alert('📥 Exportação de dados será implementada!\n\nVocê receberá um arquivo com:\n• Dados pessoais\n• Histórico de atividades\n• Configurações\n• Estatísticas');
  }

  deleteAccount() {
    const confirmDelete = confirm(
      '⚠️ Tem certeza que deseja excluir sua conta?\n\nEsta ação é irreversível e todos os seus dados serão permanentemente removidos.'
    );
    
    if (confirmDelete) {
      alert('🗑️ Funcionalidade de exclusão será implementada!\n\nIncluirá:\n• Confirmação por email\n• Período de carência\n• Remoção completa dos dados');
    }
  }

  logout() {
    const confirmLogout = confirm('🚪 Tem certeza que deseja sair?');
    
    if (confirmLogout) {
      this.isLoggedIn = false;
      alert('👋 Logout realizado com sucesso!\n\nObrigado por usar a Órbita Pessoal!');
    }
  }
}

