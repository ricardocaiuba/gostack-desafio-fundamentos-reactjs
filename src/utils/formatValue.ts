const formatValue = (value: number): string =>
  Intl.NumberFormat('bt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
