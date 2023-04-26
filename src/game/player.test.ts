import { setupPlayer } from "./player";

test("setupPlayer creates a player with 5 cash, empty hand and empty board", () => {
  const playerState = setupPlayer();
  expect(playerState).toEqual({
    board: [],
    hand: [],
    cash: 5,
  });
});
