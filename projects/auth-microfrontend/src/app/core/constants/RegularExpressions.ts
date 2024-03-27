const uppercase = '(?=.*[A-Z])';
const specialCharacter = '(?=.*[!@#$%^&*()_+{}[\\]:;<>,.?~\\/-])';
const number = '(?=.*[0-9])';

export const regularExpressionPassword = new RegExp('^' + uppercase + number + specialCharacter + '.{8,}$');
