import * as express from "express";

export default class App {
  private app: express.Express;
  constructor() {
    this.app = express();

    this.app.get("/api/ping", (req, res) => res.send("pong"));
  }

  public start() {
    this.app.listen(3000, () => {
      console.log("listening on *:3000");
    });
  }
}
