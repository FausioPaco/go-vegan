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

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(price);
}
