import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { quoteComponent } from './quote/quote.component';
import { QuotesDetailsComponent } from './quote-details/quote-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuotesFormComponent } from './quote-form/quote-form.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    quoteComponent,
    QuotesDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    QuotesFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
