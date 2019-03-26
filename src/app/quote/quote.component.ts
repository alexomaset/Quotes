import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class quoteComponent implements OnInit {

  quote = [
    new Quote(1,"",'Sometime we can feel a bit dull in the morning and we need to produce our own sunshine energy',new Date (2019,6,21)),
    new Quote(2,"",'Other times we come downstairs feeling sunny already. Those are great days!',new Date (2019,6,21)),
    new Quote(3,'', 'You only live once, but if you do it right, once is enough',new Date (2019,6,21)),
    new Quote(4,'', 'Either way, I think we can all do with a bit more spark to help us perform miracles and live in joy.',new Date (2019,6,21)),
    new Quote(5,"", 'Dont cry because its over, smile because it happened.',new Date (2019,6,21)),
    new Quote(6, "",'Be yourself; everyone else is already taken.',new Date (2019,6,21)),

  ]


  //toogle details
  toogleDetails(index){
    this.quote[index].showDescription=!   this.quote[index].showDescription;
    }

  
  completequote(isComplete,index){
    if (isComplete){
        this.quote.splice(index,1);
        }
      }

      addNewQuote(quote){
        this.quote.push(quote);
      }

      ngOnInit(){
        
      }
    }