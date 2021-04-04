export default class Automaton {
  constructor() {
    this.state = 1;
  }

  readCommands(commands) {
    commands.forEach((item) => {
      if ((this.state === 1 && parseInt(item) === 1) || this.state === 3)
        this.state = 2;
      else if (this.state === 2 && parseInt(item) === 0)
        this.state = 3;
    });
    return this.state === 2;
  }
}

