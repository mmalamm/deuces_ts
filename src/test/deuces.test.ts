import Game from "../deuces/deuces";

test("match", () => {
  const game = new Game([]);

  expect(game.currentMatch).toBe(undefined);
});
