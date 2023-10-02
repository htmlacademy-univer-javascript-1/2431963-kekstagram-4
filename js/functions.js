const controlLength = (string, maxLength) => (string.length <= maxLength);

const checkingPalindrome = (string) => {
  const doneString = string.replaceAll(' ','').toLowerCase();
  for (let symbol = 0; doneString.length / 2 > symbol; symbol++) {
    if (doneString.at(symbol) !== doneString.at(-symbol - 1)) {
      return false;
    }
  }
  return true;
}

