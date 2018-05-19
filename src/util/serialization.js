import { utcOrdinalDate } from './date'
import {
	getUTCFullYear,
	getUTCHours,
	getUTCMinutes,
	getUTCSeconds,
	getUTCMilliseconds
} from './date-safe'

const RE_GORMAN_STR = /^((?:[+-]\d{2})?\d{4})-(\d{3})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/

const pad = (n, str) => String(str).padStart(n, 0)

export const toGormanString = date => {
	if (Number.isNaN(Number(date))) return String(new Date(NaN))
	const year = getUTCFullYear(date)
	const p = year > 9999 ? '+' : year < 0 ? '-' : ''
	const y = pad(p ? 6 : 4, Math.abs(year))
	const o = pad(3, utcOrdinalDate(date))
	const h = pad(2, getUTCHours(date))
	const m = pad(2, getUTCMinutes(date))
	const s = pad(2, getUTCSeconds(date))
	const ms = pad(3, getUTCMilliseconds(date))
	return `${p}${y}-${o}T${h}:${m}:${s}.${ms}Z`
}

export const fromGormanString = str => {
	const match = str.match(RE_GORMAN_STR)
	if (!match) return NaN
	const [y, o, h, m, s, ms] = match.slice(1).map(Number)
	return o < 1 || o > 366 || h > 23 || m > 59 || s > 59
		? NaN
		: Date.UTC(y, 0, o, h, m, s) + ms
}
