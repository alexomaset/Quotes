import { Component } from '@angular/core';
import {Quotes} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  quotes = [
      new Quotes(1,''),
      new Quotes(2,''),
      new Quotes(3, ''),
      new Quotes(4, ''),
      new Quotes(5, ''),
      new Quotes(6, ''),

  ]
}
