import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CookieSettings {
  functionality: boolean;
  analytics: boolean;
}

interface RightsRequest {
  type: string;
  name: string;
  email: string;
  details: string;
}

@Component({
  selector: 'app-termos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './termos.html',
  styleUrl: './termos.css'
})
export class TermosComponent implements OnInit {
  activeTab = 'termos';
  
  cookieSettings: CookieSettings = {
    functionality: true,
    analytics: false
  };

  rightsRequest: RightsRequest = {
    type: '',
    name: '',
    email: '',
    details: ''
  };

  ngOnInit() {
    this.loadCookieSettings();
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  loadCookieSettings() {
    const savedSettings = localStorage.getItem('cookieSettings');
    if (savedSettings) {
      this.cookieSettings = JSON.parse(savedSettings);
    }
  }

  updateCookieSettings() {
    localStorage.setItem('cookieSettings', JSON.stringify(this.cookieSettings));
  }

  saveCookiePreferences() {
    this.updateCookieSettings();
    alert(`✅ Preferências de cookies salvas!

Configurações atuais:
• Cookies Essenciais: ✅ Ativados (obrigatórios)
• Cookies de Funcionalidade: ${this.cookieSettings.functionality ? '✅ Ativados' : '❌ Desativados'}
• Cookies Analíticos: ${this.cookieSettings.analytics ? '✅ Ativados' : '❌ Desativados'}

Suas preferências foram aplicadas e serão respeitadas durante sua navegação.`);
  }

  requestDataAccess() {
    alert(`📋 Solicitação de Acesso aos Dados

Para solicitar acesso aos seus dados pessoais:

1. 📧 Envie um e-mail para: direitos@orbitapessoal.com.br
2. 📝 Inclua as seguintes informações:
   • Nome completo
   • E-mail cadastrado
   • Documento de identificação
   • Descrição específica dos dados solicitados

3. ⏱️ Prazo de resposta: até 15 dias úteis

Você receberá um relatório completo com todos os dados pessoais que possuímos sobre você, incluindo:
• Dados de cadastro
• Histórico de cursos
• Preferências de aprendizagem
• Dados de navegação (quando aplicável)

Em conformidade com o Art. 9º da LGPD.`);
  }

  requestDataCorrection() {
    alert(`✏️ Solicitação de Correção de Dados

Para corrigir dados incorretos ou desatualizados:

1. 📧 Entre em contato: direitos@orbitapessoal.com.br
2. 📝 Informe:
   • Dados que precisam ser corrigidos
   • Informações corretas para atualização
   • Documentos comprobatórios (se necessário)

3. ⏱️ Prazo para correção: até 15 dias úteis

Tipos de correção disponíveis:
• Dados pessoais (nome, e-mail, etc.)
• Preferências de curso
• Informações de perfil
• Dados de progresso (quando aplicável)

Direito garantido pelo Art. 9º, II da LGPD.`);
  }

  requestDataDeletion() {
    alert(`🗑️ Solicitação de Exclusão de Dados

Para solicitar a exclusão dos seus dados:

⚠️ ATENÇÃO: Esta ação é irreversível!

1. 📧 Envie solicitação para: direitos@orbitapessoal.com.br
2. 📝 Inclua:
   • Confirmação expressa da solicitação
   • Motivo da exclusão
   • Documento de identificação

3. ⏱️ Prazo para exclusão: até 15 dias úteis

Consequências da exclusão:
• ❌ Perda de acesso a cursos em andamento
• ❌ Perda de certificados e progresso
• ❌ Cancelamento de newsletter
• ❌ Exclusão de preferências personalizadas

Alguns dados podem ser mantidos por obrigação legal (Art. 16 da LGPD).`);
  }

  requestDataPortability() {
    alert(`📤 Solicitação de Portabilidade de Dados

Para receber seus dados em formato estruturado:

1. 📧 Solicite via: direitos@orbitapessoal.com.br
2. 📝 Especifique:
   • Formato desejado (JSON, CSV, XML)
   • Dados específicos solicitados
   • Finalidade da portabilidade

3. ⏱️ Prazo de entrega: até 15 dias úteis

Dados disponíveis para portabilidade:
• 👤 Informações de perfil
• 📚 Histórico de cursos e progresso
• 🎯 Preferências de aprendizagem
• 📊 Estatísticas de jogos
• 📧 Histórico de comunicações

Os dados serão fornecidos em formato interoperável, conforme Art. 9º, VI da LGPD.`);
  }

  requestDataOpposition() {
    alert(`❌ Oposição ao Tratamento de Dados

Para se opor ao tratamento baseado em interesse legítimo:

1. 📧 Manifeste oposição via: direitos@orbitapessoal.com.br
2. 📝 Especifique:
   • Tratamento ao qual se opõe
   • Motivos da oposição
   • Dados específicos envolvidos

3. ⏱️ Prazo de análise: até 15 dias úteis

Tratamentos que podem ser contestados:
• 📊 Análises de comportamento de navegação
• 📈 Estudos de melhoria do site
• 📧 Comunicações promocionais
• 🎯 Personalização de conteúdo

Avaliaremos sua solicitação e, se procedente, cessaremos o tratamento contestado (Art. 9º, IV da LGPD).`);
  }

  revokeConsent() {
    alert(`🔒 Revogação de Consentimento

Para revogar consentimentos previamente dados:

1. 📧 Envie solicitação para: direitos@orbitapessoal.com.br
2. 📝 Especifique:
   • Consentimentos a serem revogados
   • Data da revogação desejada
   • Confirmação da decisão

3. ⏱️ Efeito: imediato após confirmação

Consentimentos que podem ser revogados:
• 📧 Newsletter e comunicações
• 🍪 Cookies não essenciais
• 📊 Análises de comportamento
• 🎯 Personalização avançada

⚠️ A revogação pode afetar funcionalidades do site.

Direito garantido pelo Art. 8º, §5º da LGPD.`);
  }

  submitRightsRequest() {
    if (!this.rightsRequest.type || !this.rightsRequest.name || !this.rightsRequest.email || !this.rightsRequest.details) {
      alert('❌ Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Simular envio da solicitação
    const requestId = 'REQ-' + Date.now().toString().slice(-6);
    
    alert(`✅ Solicitação Enviada com Sucesso!

📋 Número do Protocolo: ${requestId}
📧 E-mail: ${this.rightsRequest.email}
🎯 Tipo: ${this.getRequestTypeName(this.rightsRequest.type)}

📝 Próximos passos:
1. Você receberá um e-mail de confirmação em até 24 horas
2. Nossa equipe analisará sua solicitação
3. Resposta em até 15 dias úteis (prorrogável por mais 15 dias)

📞 Para acompanhar o status:
• E-mail: direitos@orbitapessoal.com.br
• Telefone: (71) 3333-4444
• Protocolo: ${requestId}

Obrigado por exercer seus direitos! Estamos comprometidos com a proteção dos seus dados pessoais.`);

    // Limpar formulário
    this.rightsRequest = {
      type: '',
      name: '',
      email: '',
      details: ''
    };
  }

  private getRequestTypeName(type: string): string {
    const types: { [key: string]: string } = {
      'access': 'Acesso aos dados',
      'correction': 'Correção de dados',
      'deletion': 'Exclusão de dados',
      'portability': 'Portabilidade de dados',
      'opposition': 'Oposição ao tratamento',
      'consent': 'Revogação de consentimento'
    };
    return types[type] || type;
  }
}

