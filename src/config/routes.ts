import { IRouteProps } from "../props/RouteProp";
import GameLobby from "../components/GameLobby/GameLobby";
import GameScreen from "../components/GameScreen/GameScreen";

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
  }
];

export default routes;
