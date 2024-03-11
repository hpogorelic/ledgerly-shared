export function toCents(amount) {
  return Math.round(amount * 100)
}
export function fromCents(cents) {
  return cents / 100
}
export function formatMoney(cents, currency) {
  return (currency || 'EUR') + ' ' + fromCents(cents).toFixed(2)
}
