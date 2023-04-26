import _ from "lodash";
import { Ctx, DefaultPluginAPIs } from "boardgame.io";
import { generateDeck, CardId } from "./deck";
import { setupPlayer } from "./player";

interface SetupData {
  suits?: string[];
  extraCards?: CardId[];
}

export const minPlayers = 2;
export const maxPlayers = 5;

export const defaultSuits: string[] = [
  "2013-ARTE",
  "2013-POLITICA",
  "2013-ESPORTE",
  "2013-COTIDIANO",
  "2013-LITERATURA",
  "2013-FICÇÃO",
];

export const setup = (
  { ctx, random }: { ctx: Ctx; random: DefaultPluginAPIs["random"] },
  setupData: SetupData
) => {
  const suits = setupData?.suits || defaultSuits;
  const deck = random.Shuffle(generateDeck(suits));
  const players = Array.from({ length: ctx.numPlayers }, () => setupPlayer());

  players.forEach((player) => {
    player.cash = 5;
    player.hand.push(deck.pop() as CardId);
    player.hand.push(deck.pop() as CardId);
  });

  return { deck, players, suits };
};

export const validateSetupData = (setupData: SetupData, numPlayers: number) => {
  if (numPlayers < minPlayers || numPlayers > maxPlayers) {
    return `Invalid number of players: ${numPlayers}`;
  }
  if (setupData?.suits && _.uniq(setupData.suits).length !== 6) {
    return "Game requires 6 unique suits";
  }
};
