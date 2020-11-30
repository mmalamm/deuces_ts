import Player from "./player";
import Match from "./match";

class Game {
  players: Player[];
  matches: Match[];

  constructor(players: Player[]) {
    this.matches = [];
    this.players = players;
  }

  get currentMatch() {
    return this.matches.slice(-1);
  }
}

export default Game;
