import { Routes } from '@angular/router';
import { CounterPageComponent } from './counter/counter-page.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';
import { DragonballPageComponent } from '../app/dragonball-page/dragonball-page.component';
import { DragonballSuperComponent } from '../app/dragonball-super/dragonball-super.component'; 

export const routes: Routes = [
  { path: 'counter', component: CounterPageComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'hero', component: HeroPageComponent },
  { path: 'dragonball', component: DragonballPageComponent },
  { path: 'dragonballsuper', component: DragonballSuperComponent }, 
  { path: '', redirectTo: 'usuario', pathMatch: 'full' },
];
