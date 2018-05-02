import { clone, utcOrdinalDate } from './date'

const RE_GORMAN_STR = /^((?:[+-]\d{2})?\d{4})-(\d{3})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/

const pad = (n, str) => String(str).padStart(n, 0)

export const toGormanString = date => {
	if (Number.isNaN(date)) throw new RangeError('Invalid time value')
	const year = date.getUTCFullYear()
	const p = year > 9999 ? '+' : year < 0 ? '-' : ''
	const y = pad(p ? 6 : 4, Math.abs(year))
	const o = pad(3, utcOrdinalDate(clone(date)))
	const h = pad(2, date.getUTCHours())
	const m = pad(2, date.getUTCMinutes())
	const s = pad(2, date.getUTCSeconds())
	const ms = pad(3, date.getUTCMilliseconds())
	return `${p}${y}-${o}T${h}:${m}:${s}.${ms}Z`
}

const isGormanString = str => RE_GORMAN_STR.test(str)

const fromGormanString = str => {
	const match = str.match(RE_GORMAN_STR)
	if (!match) return NaN
	const [y, o, h, m, s, ms] = match.slice(1).map(Number)
	return Date.UTC(y, 0, o, h, m, s) + ms
}

export const parse = str => {
	if (isGormanString(str)) return fromGormanString(str)
}
