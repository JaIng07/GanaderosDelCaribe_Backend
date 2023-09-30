import express from "express";
import cors from "cors";

import AppDataSource from "../database/config";
import animalRoutes from "../routes/animal.routes"

class Server {
  port: string | undefined
  app: any

  constructor() {
    this.port = process.env.PORT || '8080';
    this.app = express()
    this.databaseInitialize()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.static("public"))
    this.app.use(express.json())
    this.app.use(cors())
  }

  async databaseInitialize() {
    try{
      await AppDataSource.initialize()
      console.log("Base de datos inicializada correctamente!")
    }catch(err){
      console.error("ERROR AL MOMENTO DE INIZIALIZAR LA BASE DE DATOS")
      console.error(err)
    }
  }

  routes() {
    // aca se van a definir las rutas
    this.app.use('/api/animal', animalRoutes)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`El servidor esta corriendo en el puerto: ${this.port}`)
      console.log(`Si estas en local puede visitar: http://localhost:${this.port}`)
    })
  }

}

export default Server
