import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  isAccessibilityOpen = false;
  isMobileMenuOpen = false;
  isDarkMode = false;
  isHighContrast = false;
  isLargeFont = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadAccessibilitySettings();
    }
  }

  toggleAccessibility() {
    this.isAccessibilityOpen = !this.isAccessibilityOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyAccessibilitySettings();
    this.saveAccessibilitySettings();
  }

  toggleHighContrast() {
    this.isHighContrast = !this.isHighContrast;
    this.applyAccessibilitySettings();
    this.saveAccessibilitySettings();
  }

  toggleLargeFont() {
    this.isLargeFont = !this.isLargeFont;
    this.applyAccessibilitySettings();
    this.saveAccessibilitySettings();
  }

  resetAccessibility() {
    this.isDarkMode = false;
    this.isHighContrast = false;
    this.isLargeFont = false;
    this.applyAccessibilitySettings();
    this.saveAccessibilitySettings();
  }

  private applyAccessibilitySettings() {
    if (!isPlatformBrowser(this.platformId)) return;

    const body = document.body;
    
    // Aplicar/remover classes
    body.classList.toggle('dark-mode', this.isDarkMode);
    body.classList.toggle('high-contrast', this.isHighContrast);
    body.classList.toggle('large-font', this.isLargeFont);
  }

  private saveAccessibilitySettings() {
    if (!isPlatformBrowser(this.platformId)) return;

    const settings = {
      darkMode: this.isDarkMode,
      highContrast: this.isHighContrast,
      largeFont: this.isLargeFont
    };
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }

  private loadAccessibilitySettings() {
    if (!isPlatformBrowser(this.platformId)) return;

    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      const settings = JSON.parse(saved);
      this.isDarkMode = settings.darkMode || false;
      this.isHighContrast = settings.highContrast || false;
      this.isLargeFont = settings.largeFont || false;
      this.applyAccessibilitySettings();
    }
  }

  loginWithGoogle() {
    // Implementação do login com Google
    alert('🚀 Login com Google será implementado em breve!\n\nEsta funcionalidade requer:\n• Configuração do Google OAuth\n• Integração com Firebase Auth\n• Página de perfil do usuário');
  }

  loginWithFacebook() {
    // Implementação do login com Facebook
    alert('🚀 Login com Facebook será implementado em breve!\n\nEsta funcionalidade requer:\n• Configuração do Facebook SDK\n• Integração com Firebase Auth\n• Página de perfil do usuário');
  }
}

