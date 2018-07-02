import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'HeaderBlock',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
    headerTitle: string;
    userName: string;

    constructor() {
      this.headerTitle = 'API de Consumo do SWAPI - v0.01a';
    }
}
