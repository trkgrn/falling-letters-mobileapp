import { IRouteProps } from "../props/RouteProp";
import GameLobby from "../components/GameLobby/GameLobby";
import GameScreen from "../components/GameScreen/GameScreen";
import ScoreList from "../components/ScoreList/ScoreList";

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
  }
];

export default routes;
