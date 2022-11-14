// PREPARE VALUES WITH SPECIFIC FORMATS

export const prepareValue = (value: string | string[]): number => {
  if (typeof value !== 'string') return value.length;
  if (value.includes(',')) return parseFloat(value.replace(',', ''));
  if (value.includes('-')) return parseFloat(value.split('-')[0]);
  return parseFloat(value);
};

export const prepareString = (value: string | string[]): string => {
  if (typeof value !== 'string') return value.length.toString();
  if (value.includes(',')) return value.replace(',', '');
  if (value.includes('-')) return value.split('-')[0];
  return value;
};
