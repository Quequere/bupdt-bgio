import _ from "lodash";
import { MockRandom } from "boardgame.io/testing";
import {
  minPlayers,
  maxPlayers,
  validateSetupData,
  setup,
  defaultSuits,
} from "./setup";
import { Ctx, DefaultPluginAPIs } from "boardgame.io";

test(`does not allow more than ${maxPlayers} players`, () => {
  const higherNumber = maxPlayers + 1;
  const validation = validateSetupData({}, higherNumber);
  expect(validation).toEqual(`Invalid number of players: ${higherNumber}`);
});

test(`does not allow less than ${minPlayers} players`, () => {
  const lowerNumber = minPlayers - 1;
  const validation = validateSetupData({}, lowerNumber);
  expect(validation).toEqual(`Invalid number of players: ${lowerNumber}`);
});

test.each(_.range(minPlayers, maxPlayers + 1))(
  "allows %i players",
  (number) => {
    const validation = validateSetupData({}, number);
    expect(validation).toEqual(undefined);
  }
);

test.each(_.range(minPlayers, maxPlayers + 1))(
  "setup %i player game",
  (numPlayers) => {
    const ctx = { numPlayers } as Ctx;
    const random = {
      Shuffle: function <T>(array: T[]): T[] {
        return array;
      },
    } as DefaultPluginAPIs["random"];
    const game = setup({ ctx, random }, {});
    expect(game.suits).toEqual(defaultSuits);
    expect(game.deck.length).toEqual(90 - 2 * numPlayers);
    expect(game.players.length).toEqual(numPlayers);
    expect(game.players.every((player) => player.board.length == 0)).toBe(true);
    expect(game.players.every((player) => player.hand.length == 2)).toBe(true);
    expect(game.players.every((player) => player.cash == 5)).toBe(true);
  }
);
