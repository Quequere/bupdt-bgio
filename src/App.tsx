import { Client } from "boardgame.io/react";
import game from "./game";

const App = Client({ game, numPlayers: 3 });

export default App;
