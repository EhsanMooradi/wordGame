import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameContainerComponent } from './components/game-container/game-container.component';
import { AlphabetContainerComponent } from './components/alphabet-container/alphabet-container.component';
import { WordContainerComponent } from './components/word-container/word-container.component';

@NgModule({
  declarations: [
    AppComponent,
    GameContainerComponent,
    AlphabetContainerComponent,
    WordContainerComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
