import { generateDeck } from "./deck";

test("generateDeck creates all cards for a suite", () => {
  const deck = generateDeck(["2023-POLITICA"]);
  expect(deck.length).toBe(15);
  expect(deck).toEqual([
    "2023-POLITICA--positiveEvent",
    "2023-POLITICA--negativeEvent",
    "2023-POLITICA--joker1",
    "2023-POLITICA--joker2",
    "2023-POLITICA--joker3",
    "2023-POLITICA--fool1A",
    "2023-POLITICA--fool1B",
    "2023-POLITICA--fool2A",
    "2023-POLITICA--fool2B",
    "2023-POLITICA--fool3A",
    "2023-POLITICA--fool3B",
    "2023-POLITICA--fool4A",
    "2023-POLITICA--fool4B",
    "2023-POLITICA--fool5A",
    "2023-POLITICA--fool5B",
  ]);
});

test("generateDeck creates all cards for all suites", () => {
  const deck = generateDeck(["2023-POLITICA", "2023-RELIGIÃO"]);
  expect(deck.length).toBe(30);
  expect(deck).toEqual([
    "2023-POLITICA--positiveEvent",
    "2023-POLITICA--negativeEvent",
    "2023-POLITICA--joker1",
    "2023-POLITICA--joker2",
    "2023-POLITICA--joker3",
    "2023-POLITICA--fool1A",
    "2023-POLITICA--fool1B",
    "2023-POLITICA--fool2A",
    "2023-POLITICA--fool2B",
    "2023-POLITICA--fool3A",
    "2023-POLITICA--fool3B",
    "2023-POLITICA--fool4A",
    "2023-POLITICA--fool4B",
    "2023-POLITICA--fool5A",
    "2023-POLITICA--fool5B",
    "2023-RELIGIÃO--positiveEvent",
    "2023-RELIGIÃO--negativeEvent",
    "2023-RELIGIÃO--joker1",
    "2023-RELIGIÃO--joker2",
    "2023-RELIGIÃO--joker3",
    "2023-RELIGIÃO--fool1A",
    "2023-RELIGIÃO--fool1B",
    "2023-RELIGIÃO--fool2A",
    "2023-RELIGIÃO--fool2B",
    "2023-RELIGIÃO--fool3A",
    "2023-RELIGIÃO--fool3B",
    "2023-RELIGIÃO--fool4A",
    "2023-RELIGIÃO--fool4B",
    "2023-RELIGIÃO--fool5A",
    "2023-RELIGIÃO--fool5B",
  ]);
});
