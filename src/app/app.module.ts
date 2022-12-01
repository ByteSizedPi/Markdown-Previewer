import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownComponent } from 'ngx-markdown';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MarkdownModule.forRoot()],
  providers: [MarkdownComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
