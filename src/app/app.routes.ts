import { Routes } from '@angular/router';
<<<<<<< Updated upstream

export const routes: Routes = [];
=======
import { HeroComponent } from './hero/hero.component'; // Asegúrate de que esta ruta es correcta
import { ContactComponent} from './contact/contact.component';


export const routes: Routes = [
  { path: 'hero', component: HeroComponent },
  { path: 'contact', component: ContactComponent} // Define la ruta para el HeroComponent
];
>>>>>>> Stashed changes
