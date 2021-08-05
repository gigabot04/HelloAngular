import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card | null = null;

  title: string = 'My Card Title'
  desc: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, excepturi.'

  textColor: string = 'black'

  ngOnInit(): void {}

  changeTitle() {
    if(this.card){
      this.card.title = 'This title has been change'
    }
  }

}
