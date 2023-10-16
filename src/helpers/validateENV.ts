import { throws } from 'assert';
import colors from 'colors';

/**
 * La función `validateENV` comprueba si todas las variables de entorno necesarias están definidas y lanza
 * un error si falta alguna. un error si falta alguna.
 */
export const validateENV = () => {
  const {
    PORT,
    TYPEORM_CONNECTION,
    TYPEORM_HOST,
    TYPEORM_USERNAME,
    TYPEORM_PASSWORD,
    TYPEORM_PORT,
    TYPEORM_DATABASE,
  } = process.env;

  if (!PORT) {
    throw new Error(`${colors.red("[ERROR]")} PORT no definido`);
  }
  if (!TYPEORM_CONNECTION) {
    throw new Error(`${colors.red("[ERROR]")} TYPEORM_CONNECTION no definido`);
  }
  if (!TYPEORM_HOST) {
    throw new Error(`${colors.red("[ERROR]")} TYPEORM_HOST no definido`);
  }
  if (!TYPEORM_USERNAME) {
    throw new Error(`${colors.red("[ERROR]")} TYPEORM_USERNAME no definido`);
  }
  if (!TYPEORM_PASSWORD) {
    throw new Error(`${colors.red("[ERROR]")} TYPEORM_PASSWORD no definido`);
  }
  if (!TYPEORM_PORT) {
    throw new Error(`${colors.red("[ERROR]")} TYPEORM_PORT no definido`);
  }
  if (!TYPEORM_DATABASE) {
    throw new Error(`${colors.red("[ERROR]")} TYPEORM_DATABASE no definido`);
  }

  console.log(`${colors.green("[INFO]")} Todas variables de entorno han sido definidas correctamente!`);

}