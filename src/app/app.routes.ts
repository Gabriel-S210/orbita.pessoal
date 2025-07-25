import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { NoticiasComponent } from './noticias/noticias';
import { CursosComponent } from './cursos/cursos';
import { JogoComponent } from './jogo/jogo';
import { TermosComponent } from './termos/termos';
import { LgpdComponent } from './lgpd/lgpd';
import { PerfilComponent } from './perfil/perfil';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'jogo', component: JogoComponent },
  { path: 'termos', component: TermosComponent },
  { path: 'lgpd', component: LgpdComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '**', redirectTo: '' }
];

