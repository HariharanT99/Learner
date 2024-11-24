import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared/shared-component.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SharedComponentModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
