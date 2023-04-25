import { Game } from "boardgame.io";
import { generateDeck, CardId } from "./deck";
import { setupPlayer } from "./player";
import _ from "lodash";

interface SetupData {
  suits?: string[];
  extraCards?: CardId[];
}

const minPlayers = 2;
const maxPlayers = 5;

const defaultSuits: string[] = [
  "2013-ARTE",
  "2013-POLITICA",
  "2013-ESPORTE",
  "2013-COTIDIANO",
  "2013-LITERATURA",
  "2013-FICÇÃO",
];

const game: Game = {
  minPlayers,
  maxPlayers,
  setup: ({ ctx, random }, setupData: SetupData) => {
    const deck = random.Shuffle(generateDeck(setupData?.suits || defaultSuits));
    const players = Array.from({ length: ctx.numPlayers }, () => setupPlayer());

    players.forEach((player) => {
      player.cash = 5;
      player.hand.push(deck.pop() as CardId);
      player.hand.push(deck.pop() as CardId);
    });

    return { deck, players };
  },
  validateSetupData: (setupData: SetupData, numPlayers) => {
    if (numPlayers < minPlayers || numPlayers > maxPlayers) {
      return "Invalid number of players: ${numPlayers}";
    }
    if (setupData?.suits && _.uniq(setupData.suits).length !== 6) {
      return "Game requires 6 unique suits";
    }
  },
};

export default game;
