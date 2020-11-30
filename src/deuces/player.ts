class Player {
  id: string;
  name: string;
  score: number;

  constructor(name: string, id: string) {
    this.id = id;
    this.name = name;
    this.score = 100;
  }
}

export default Player;
