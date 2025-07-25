import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  showTodaySky() {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    const dateString = today.toLocaleDateString('pt-BR', options);
    
    alert(`🌟 Céu de Salvador - ${dateString}

🌙 Lua: Crescente (visível até 23h)
🪐 Planetas visíveis: Júpiter (21h-02h), Saturno (22h-04h)
⭐ Constelações em destaque: Órion, Cruzeiro do Sul
🛰️ Passagem da ISS: 20:15 (direção NO-SE)
🌠 Próxima chuva de meteoros: Perseidas (12/08)

💡 Dica: Use um aplicativo de mapa estelar para localizar os objetos!`);
  }
}

