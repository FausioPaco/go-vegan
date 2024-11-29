export function capitalize(word: string): string {
  if (!word) return '';

  return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
}
