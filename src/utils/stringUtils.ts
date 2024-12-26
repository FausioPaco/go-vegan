export function capitalize(word: string): string {
  if (!word) return '';

  return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
}

export function pluralizeUnit(value: number, unit: string): string {
  const plurals: { [key: string]: string } = {
    g: 'grams',
    plate: 'plates',
    unit: 'units',
    mouse: 'mice',
    person: 'people',
  };

  if (value === 1) {
    return `${value} ${unit}`;
  }

  return `${value} ${plurals[unit.toLocaleLowerCase()]}`;
}
