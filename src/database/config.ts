import { DataSource } from "typeorm"
import 'dotenv/config'
import { Animal } from "../entities";

const DB_TYPE = process.env.TYPEORM_CONNECTION as "mssql" | undefined;
const DB_HOST = process.env.TYPEORM_HOST;
const DB_PORT = process.env.TYPEORM_PORT ? parseInt(process.env.TYPEORM_PORT) : undefined;
const DB_USERNAME = process.env.TYPEORM_USERNAME;
const DB_PASSWORD = process.env.TYPEORM_PASSWORD;
const DB_DATABASE = process.env.TYPEORM_DATABASE;

if (!DB_TYPE || !DB_HOST || !DB_PORT || !DB_USERNAME || !DB_PASSWORD || !DB_DATABASE) {
  throw new Error("Una o más variables de entorno no están definidas");
}

const AppDataSource = new DataSource({
  type: DB_TYPE,
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
  entities: [Animal],
  synchronize: true,
});

export default AppDataSource