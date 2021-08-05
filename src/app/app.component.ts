import { Component } from '@angular/core';

export interface Card {
  title: string
  desc: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle: boolean = true;

  cards: Card[] = [
    {title: 'Card 1', desc: 'This is card number 1'},
    {title: 'Card 2', desc: 'This is card number 2'},
    {title: 'Card 3', desc: 'This is card number 3'},
    {title: 'Card 2', desc: 'This is card number 2'},
    {title: 'Card 3', desc: 'This is card number 3'},
    {title: 'Card 3', desc: 'This is card number 3'}
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
