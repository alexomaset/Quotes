import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote:Quote
  @Output() complete = new EventEmitter<boolean>();

  upvote:number=0;
  downvote:number=0;
  upVote(){
    this.upvote++;
  }
  downVote(){
    this.downvote--;
  }

 
 
  
  deleteQuote(deleteQ:boolean){
    this.complete.emit(deleteQ);
  }


constructor() { }

ngOnInit() {

}

  }