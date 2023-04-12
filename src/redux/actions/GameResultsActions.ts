import { GameResult } from "../../models/GameResult";

export const addGameResult = (gameResult:GameResult) => {
  return {
    type: "ADD_GAME_RESULT",
    gameResult: gameResult as GameResult,
  };
}


export const resetGameResult = () => {
  return {
    type: "RESET_GAME_RESULTS",
  };
}
