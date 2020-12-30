import Player from "./player";
import Match from "./match";

class Game {
  players: Player[];
  matches: Match[];

  constructor(players: Player[]) {
    this.matches = [];
    this.players = players;
  }

  startMatch() {
    if (this.currentMatch?.isOver) {
      this.matches.push(new Match(this.players));
      return this.currentMatch;
    } else {
      throw new Error("finish current match first");
    }
  }

  get currentMatch() {
    return this.matches.slice(-1)[0];
  }
}

export default Game;
