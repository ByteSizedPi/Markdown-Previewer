import { Component } from '@angular/core';
import { TEXT } from 'src/assets/text';
import parseText from 'src/app/shared/models/MarkdownParser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  parseText = parseText;
  title = 'MarkdownPreviewer';
  public text: string = TEXT;

  setText(e: Event) {
    this.text = (e.target as HTMLTextAreaElement).value;
  }
}

// css selector for all elements except children of specific tag
