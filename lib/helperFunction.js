export const truncateString = (str, numberKeep) => {
  return str.slice(0, numberKeep);
};
export function checkUppercase(str) {
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == str.charAt(i).toUpperCase() &&
      str.charAt(i).match(/[a-z]/i)
    ) {
      return true;
    }
  }
  return false;
}
export function checkLowercase(str) {
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == str.charAt(i).toLowerCase() &&
      str.charAt(i).match(/[a-z]/i)
    ) {
      return true;
    }
  }
  return false;
}
export function hasWhiteSpace(s) {
  return /\s/g.test(s);
}
export function hasNumber(myString) {
  return /\d/.test(myString);
}
