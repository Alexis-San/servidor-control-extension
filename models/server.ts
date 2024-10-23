import express, { Application } from "express";
import db from "../db/connection";
import cors from "cors";
import * as personaRoutes from "../routes/persona";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    personas: '/api/personas'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    // Conectar a base de datos
    console.log('Initializing dbConnection');
    this.dbConnection();
    // Métodos iniciales    
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      console.log('Connecting to database');
      await db.authenticate();
      console.log('Database authenticated');
      console.log('Database synced');
      console.log('Database online');
      await db.sync({ force: false });
    } catch (error) {
      throw new Error("Error al crear modelos " + error);
    }
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Lectura del body
    this.app.use(express.json());
    // Carpeta pública
    this.app.use(express.static('public'));
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