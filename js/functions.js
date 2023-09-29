let controlLength = function (string, maxLength) {
  if (string.length > maxLength) {
    return false;
  }

  return true;
}

let checkingPalindrome = function (string) {
  let doneString = string.replaceAll(' ','').toLowerCase();
  for (let symbol = 0; doneString.length / 2 > symbol; symbol++) {
    if (doneString.at(symbol) !== doneString.at(-symbol - 1)) {
      return false;
    }
  }
  return true;
}

