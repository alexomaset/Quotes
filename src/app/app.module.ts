import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { quoteComponent } from './quote/quote.component';
import { QuotesDetailsComponent } from './quote-details/quote-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';


@NgModule({
  declarations: [
    AppComponent,
    quoteComponent,
    QuotesDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
