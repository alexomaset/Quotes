import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class quoteComponent implements OnInit {

  quote = [
    new Quote(1,'Sometime we can feel a bit dull in the morning and we need to produce our own sunshine energy','rtyy'),
    new Quote(2,'Other times we come downstairs feeling sunny already. Those are great days!','ssst'),
    new Quote(3, 'You only live once, but if you do it right, once is enough','ssst'),
    new Quote(4, 'Either way, I think we can all do with a bit more spark to help us perform miracles and live in joy.','ssst'),
    new Quote(5, 'Dont cry because its over, smile because it happened.','ssst'),
    new Quote(6, 'Be yourself; everyone else is already taken.','ssst'),

  ]
  
  completequote(isComplete,index){
    if (isComplete){
        this.quote.splice(index,1);
        }
      }

      ngOnInit(){
        
      }
    }