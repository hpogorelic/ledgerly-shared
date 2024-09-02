export const CURRENCIES = ['EUR', 'USD', 'GBP']

export function validateEntry(entry) {
  const errors = []
  if (!entry || typeof entry !== 'object') return ['entry must be an object']
  if (typeof entry.account !== 'string' || !entry.account.trim()) errors.push('account is required')
  if (typeof entry.amount !== 'number' || !Number.isFinite(entry.amount)) errors.push('amount must be a number')
  if (entry.amount === 0) errors.push('amount must not be zero')
  if (entry.memo != null && typeof entry.memo !== 'string') errors.push('memo must be a string')
  if (entry.currency != null && !CURRENCIES.includes(entry.currency)) errors.push('unsupported currency')
  return errors
}
