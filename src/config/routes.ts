import { IRouteProps } from "../props/RouteProp";
import GameLobby from "../components/GameLobby/GameLobby";
import GameScreen from "../components/GameScreen/GameScreen";
import ScoreList from "../components/ScoreList/ScoreList";
import WordList from "../components/WordList/WordList";

const routes: IRouteProps[] = [
  {
    name: "GameLobby",
    component: GameLobby,
    options: { headerShown: false},
  },
  {
    name: "GameScreen",
    component: GameScreen,
    options: {  headerShown: false},
  },
  {
    name: "ScoreList",
    component: ScoreList,
    options: {  headerShown: false}
  },
  {
    name: "WordList",
    component: WordList,
    options: {  headerShown: false}
  }
];

export default routes;
