export function formatPrice(value?: number) {
  if (value) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  return Number(0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}


export function formatTel(value: string) {
   return value.replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})(\d+?)/, '$1')
}
