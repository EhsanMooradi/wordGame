import { Injectable } from '@angular/core';
import { questions } from 'src/app/Data/questions';

@Injectable({
  providedIn: 'root',
})
export class LogicService {
  constructor() {}

  public checkAnswer(questionIndex: number, answer: string): boolean {
    if (
      questions[questionIndex].answer.toLocaleLowerCase() ===
      answer.toLocaleLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  }
}
