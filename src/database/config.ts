import { DataSource } from "typeorm"
import 'dotenv/config'
import { Animal, User } from "../entities";
import Activity from "../entities/Activity.entities";
import Inventory from "../entities/Inventory.entities";
import StatusAnimal from "../entities/StatusAnimal.entities";
import Ecommerce from "../entities/Ecommerce.entities";

const DB_TYPE = process.env.TYPEORM_CONNECTION as "mssql" | undefined;
const DB_HOST = process.env.TYPEORM_HOST;
const DB_PORT = process.env.TYPEORM_PORT ? parseInt(process.env.TYPEORM_PORT) : undefined;
const DB_USERNAME = process.env.TYPEORM_USERNAME;
const DB_PASSWORD = process.env.TYPEORM_PASSWORD;
const DB_DATABASE = process.env.TYPEORM_DATABASE;

if (!DB_TYPE) {
  throw new Error("TYPEORM_CONNECTION no definido");
}

const AppDataSource = new DataSource({
  type: DB_TYPE,
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
  entities: [Animal, User, Activity, Inventory, Ecommerce, StatusAnimal],
  synchronize: true,
});

export default AppDataSource