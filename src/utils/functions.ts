// A function that makes the first letter of a string uppercase
export function capitalizeFirstLetter(str: string | undefined) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
