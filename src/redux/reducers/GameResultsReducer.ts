import { GameResult } from "../../models/GameResult";

const INITIAL_STATE: GameResult[] = [];

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "ADD_GAME_RESULT":
      state = [...state, action.gameResult];
      return state;
    case "RESET_GAME_RESULTS":
      state = [];
      return state;
    default:
      return state;
  }
}
