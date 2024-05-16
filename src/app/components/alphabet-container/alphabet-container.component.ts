import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alphabet-container',
  templateUrl: './alphabet-container.component.html',
  styleUrls: ['./alphabet-container.component.css'],
})
export class AlphabetContainerComponent {
  upperCaseAlphabet: string[] = [
    'A',
    'Ä',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'Ö',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'Ü',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  @Output() letterToSend = new EventEmitter<string>();

  sendLetter(letter: string) {
    this.letterToSend.emit(letter);
  }
}
