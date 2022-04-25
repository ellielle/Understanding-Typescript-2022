let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
  // returns nothing at all
}

console.log(generateError('An error occurred!', 500));
// doesn't return undefined, just throws an error and "cancels" the script