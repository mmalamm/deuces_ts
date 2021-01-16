import Game from "../deuces/deuces";

it("is able to create a new game", () => {
  const game = new Game([]);

  expect(game.currentMatch).toBe(undefined);
});

it("can start a match", () => {
  const game = new Game([]);

  game.startMatch();

  expect(game.currentMatch).toBeTruthy()
})
