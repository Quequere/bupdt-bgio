import { CardId } from "./deck";

interface PlayerState {
  board: CardId[];
  hand: CardId[];
  cash: Number;
}

export const setupPlayer: () => PlayerState = () => ({
  board: [],
  hand: [],
  cash: 5,
});
