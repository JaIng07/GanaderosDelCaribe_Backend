/**
 * La función `isValidDateFormat` verifica si una cadena dada sigue el formato AAAA-MM-DD y devuelve
 * un valor booleano que indica su validez.
 * @param {string} dateString - El parámetro `dateString` es una cadena que representa una fecha en el
 * formato "AAAA-MM-DD".
 * @returns un valor booleano que indica si la `dateString` proporcionada está en el formato válido AAAA-MM-DD.
 */
export const isValidDateFormat = (dateString: string): boolean => {
    // Expresión regular para validar el formato YYYY-MM-DD
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    // Verifica si la cadena coincide con el patrón YYYY-MM-DD
    const isvalid = regex.test(dateString);

    if (!isvalid) throw new Error('La fecha debe tener el formato YYYY-MM-DD')

    return isvalid
}