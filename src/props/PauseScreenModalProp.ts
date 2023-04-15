 export interface IPauseScreenModalProps {
  isPaused: boolean;
  resumeGame: () => void;
  exitGame: () => void;
  lastWords: string[];
}
