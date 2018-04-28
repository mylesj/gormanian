import { utcOrdinalDate } from './date'

const pad = (n, str) => String(str).padStart(n, 0)

export const toGorString = gormanDate => {
	if (Number.isNaN(gormanDate)) throw new RangeError('Invalid time value')
	const year = gormanDate.getUTCGorFullYear()
	const p = year > 9999 ? '+' : year < 0 ? '-' : ''
	const y = pad(p ? 6 : 4, Math.abs(year))
	const o = pad(3, utcOrdinalDate(gormanDate))
	const h = pad(2, gormanDate.getUTCGorHours())
	const m = pad(2, gormanDate.getUTCGorMinutes())
	const s = pad(2, gormanDate.getUTCGorSeconds())
	const ms = pad(3, gormanDate.getUTCGorMilliseconds())
	return `${p}${y}-${o}T${h}:${m}:${s}.${ms}Z`
}
