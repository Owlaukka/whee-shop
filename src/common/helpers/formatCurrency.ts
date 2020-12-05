const formatCurrency = (amount: number): string =>
  amount.toLocaleString(undefined, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

export default formatCurrency;
