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
      this.headerTitle = 'API de Consumo a SWAPI v0.0.1a';
    }
}
