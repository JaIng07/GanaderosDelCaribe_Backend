import Server from './server/server'
import 'dotenv/config'
import "reflect-metadata"

const server = new Server()
server.listen()