const palindromes = function (originalString) 
{
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    // On nettoie le string d'origine sans la ponctuation, les chiffres et les majuscules
    const cleanedString = originalString.toLowerCase()
                                        .split('')
                                        .filter((character) => alphanumerical.includes(character))
                                        .join('');
    
    // On inverse l'ordre des caractères et on le sauvegarde pour comparaison
    const reversedString = cleanedString.split('').reverse().join('');

    // On test sur la version non inversée nettoyée, et on retourne le résultat (true ou false)
    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
