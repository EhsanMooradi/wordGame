import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-container',
  templateUrl: './word-container.component.html',
  styleUrls: ['./word-container.component.css'],
})
export class WordContainerComponent {
  @Input() word: String = 'word';
  @Input() maxWordLength: number = 0;
}
