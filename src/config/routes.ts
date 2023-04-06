import { IRouteProps } from "../props/RouteProp";
import GameLobby from "../components/GameLobby/GameLobby";
import GameScreen from "../components/GameScreen/GameScreen";

const routes: IRouteProps[] = [
  {
    name: "GameLobby",
    component: GameLobby,
  },
  {
    name: "GameScreen",
    component: GameScreen
  }
];

export default routes;
