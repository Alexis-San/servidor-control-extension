import express, { Application } from "express";
import * as personaRoutes from "./routes/persona";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    personas: '/api/personas'

  }
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.routes();
  }
  routes() {
    this.app.use(this.apiPaths.personas, personaRoutes.default);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
export default Server;
