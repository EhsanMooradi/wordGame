import { Component, OnInit } from '@angular/core';
import { LogicService } from './logic.service';
import { questions } from 'src/app/Data/questions';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css'],
})
export class GameContainerComponent implements OnInit {
  word: string = '';
  maxWordLength: number = 0;
  question: string = '';
  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  constructor(private logic: LogicService) {}

  ngOnInit() {
    this.word = '';
    this.maxWordLength = questions[this.questionIndex].answer.length;
    this.question = questions[this.questionIndex].question;
    this.questionMaxIndex = questions.length;
  }

  onSelectStart(event: Event): void {
    event.preventDefault(); // Verhindert das Standardverhalten des Browsers beim Textauswählen
  }

  onMouseDown(event: MouseEvent): void {
    event.preventDefault(); // Verhindert das Standardverhalten des Browsers beim Klicken
  }
  getWord(event: string) {
    if (event === '⌫') {
      this.word = this.word.substring(0, this.word.length - 1);
    }

    if (this.word.length === this.maxWordLength) {
      this.checkTheWord();
    }

    if (this.word.length < this.maxWordLength) {
      if (event === '␣') {
        this.word += ' ';
      } else if (event !== '✓' && event !== '⌫') {
        this.word += event.toLocaleLowerCase();
      }
    }
  }

  checkTheWord() {
    if (this.logic.checkAnswer(this.questionIndex, this.word)) {
      alert('Richtig 🥳');
      if (this.questionIndex + 1 === this.questionMaxIndex) {
        this.question = 'Fertig! ✅';
        this.word = '';
        this.maxWordLength = 0;
      } else {
        this.questionIndex++;
        this.ngOnInit();
      }
    }
  }
}
