import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  openAccordion: number | null = null;

  toggleAccordion(index: number) {
    this.openAccordion = this.openAccordion === index ? null : index;
  }
}
