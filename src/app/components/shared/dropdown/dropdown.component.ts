import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropDownAnimation } from './animation/dropdown.animation';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  animations: [DropDownAnimation],
})
export class DropdownComponent {
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
