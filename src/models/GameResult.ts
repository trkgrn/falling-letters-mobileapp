import { Word } from "./Word";

export class GameResult {
  score?: number;
  words?: Word[];

  constructor(score?: number, words?: Word[]) {
    this.score = score;
    this.words = words;
  }
}
