import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();
  constructor() { }

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  ngOnInit() {
  }

}
