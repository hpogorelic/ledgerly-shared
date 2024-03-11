export function validateEntry(entry) {
  var errors = []
  if (!entry || typeof entry !== 'object') return ['entry must be an object']
  if (typeof entry.account !== 'string' || !entry.account.trim()) errors.push('account is required')
  if (typeof entry.amount !== 'number' || !isFinite(entry.amount)) errors.push('amount must be a number')
  if (entry.memo != null && typeof entry.memo !== 'string') errors.push('memo must be a string')
  return errors
}
