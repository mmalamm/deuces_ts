import Player from "./player";

class Turn {
  playerId: string;

  constructor(o: Turn) {
    this.playerId = o.playerId;
  }
}

class Match {
  turns: Turn[];
  winner: null | Player;

  constructor(players: Player[]) {
    this.turns = [];
    this.winner = null;
  }
}

export default Match;
