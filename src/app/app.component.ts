import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@app/components/header/header.component';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { PageContainerComponent } from '@app/components/page-container/page-container.component';
import { FooterComponent } from '@app/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    PageContainerComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Learner';
}
