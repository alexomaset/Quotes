import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote = [
    new Quotes(1,'Sometime we can feel a bit dull in the morning and we need to produce our own sunshine energy'),
    new Quotes(2,'Other times we come downstairs feeling sunny already. Those are great days!'),
    new Quotes(3, 'You only live once, but if you do it right, once is enough'),
    new Quote(4, 'Either way, I think we can all do with a bit more spark to help us perform miracles and live in joy.'),
    new Quote(5, 'Dont cry because its over, smile because it happened.'),
    new Quote(6, 'Be yourself; everyone else is already taken.'),

  }

}
