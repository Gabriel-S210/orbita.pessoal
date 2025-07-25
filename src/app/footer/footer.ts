import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  openLGPDInfo() {
    alert('Informações sobre LGPD: Este site coleta apenas dados essenciais para personalização da experiência do usuário, seguindo todas as diretrizes da Lei Geral de Proteção de Dados.');
  }
}

