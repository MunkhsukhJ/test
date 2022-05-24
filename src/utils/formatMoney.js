const formatMoney = (value, currency = '₮', fixed = 0) => {
  if (typeof value === 'undefined') return value;
  const re = `\\d(?=(\\d{${3}})+(\\.\\d*[0-9])?$)`;
  if (currency === '$')
    return `${currency}${Number(value)
      .toFixed(fixed)
      .replace(new RegExp(re, 'g'), '$&,')
      .replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1')}`.trim();
  return `${Number(value)
    .toFixed(fixed)
    .replace(new RegExp(re, 'g'), '$&,')
    .replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1')} ${currency}`.trim();
};

export default formatMoney;
