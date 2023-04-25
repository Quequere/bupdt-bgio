const cardValues = {
  positiveEvent: "POSITIVE-EVENT",
  negativeEvent: "NEGATIVE-EVENT",
  joker1: "JOKER-1",
  joker2: "JOKER-2",
  joker3: "JOKER-3",
  fool1A: "FOOL-1A",
  fool1B: "FOOL-1B",
  fool2A: "FOOL-2A",
  fool2B: "FOOL-2B",
  fool3A: "FOOL-3A",
  fool3B: "FOOL-3B",
  fool4A: "FOOL-4A",
  fool4B: "FOOL-4B",
  fool5A: "FOOL-5A",
  fool5B: "FOOL-5B",
} as const;

// ugly, but recommended by https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums
export type CardValue = (typeof cardValues)[keyof typeof cardValues];
export type CardId = `${string}--${CardValue}`;

/**
 * Generate deck of cards from suits.
 *
 * @param suits {String[]} set of suits to use
 * @return {CardId[]} card ids in deck
 */
export const generateDeck = (suits: string[]): CardId[] =>
  suits.flatMap((suit) =>
    (Object.keys(cardValues) as CardValue[]).map(
      (value) => `${suit}--${value}` as CardId
    )
  );
