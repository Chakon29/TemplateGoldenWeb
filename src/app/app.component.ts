import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< Updated upstream
=======
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< Updated upstream
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
=======
  imports: [RouterOutlet, NavbarComponent, HeroComponent,FooterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
>>>>>>> Stashed changes
})
export class AppComponent {
  title = 'GoldenWeb';
}
