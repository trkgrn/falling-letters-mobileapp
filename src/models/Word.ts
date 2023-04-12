export class Word {
  word?: string;
  meanings?: string[];

  constructor(word?: string, meanings?: string[]) {
    this.word = word;
    this.meanings = meanings;
  }
}
