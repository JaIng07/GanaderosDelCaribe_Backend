/**
 * The function `isValidDateFormat` checks if a given string follows the format YYYY-MM-DD and returns
 * a boolean value indicating its validity.
 * @param {string} dateString - The `dateString` parameter is a string that represents a date in the
 * format "YYYY-MM-DD".
 * @returns a boolean value indicating whether the provided dateString is in the valid format of
 * YYYY-MM-DD.
 */
export const isValidDateFormat = (dateString: string): boolean => {
    // Expresión regular para validar el formato YYYY-MM-DD
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    // Verifica si la cadena coincide con el patrón YYYY-MM-DD
    const isvalid = regex.test(dateString);

    if (!isvalid) throw new Error('La fecha debe tener el formato YYYY-MM-DD')

    return isvalid
}