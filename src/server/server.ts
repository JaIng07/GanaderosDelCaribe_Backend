import express from "express";
import cors from "cors";


class Server {
  port: string | undefined
  app: any

  constructor() {
    this.port = process.env.PORT;
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
    // aca se va a inicializar la base de datos
  }

  routes() {
    // aca se van a definir las rutas
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`El servidor esta corriendo en el puerto: ${this.port}`)
      console.log(`Si estas en local puede visitar: http://localhost:${this.port}`)
    })
  }

}


export default Server
