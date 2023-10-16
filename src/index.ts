import Server from './server/server'
import 'dotenv/config'
import "reflect-metadata"
import { validateENV } from './helpers/validateENV'

validateENV()
const server = new Server()
server.listen()