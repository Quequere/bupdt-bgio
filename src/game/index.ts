import { Game } from "boardgame.io";
import { minPlayers, maxPlayers, setup, validateSetupData } from "./setup";

const game: Game = { minPlayers, maxPlayers, setup, validateSetupData };

export default game;
