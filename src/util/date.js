import {
	getMonth,
	getDate,
	getFullYear,
	getUTCMonth,
	getUTCDate,
	getUTCFullYear
} from './date-safe'

const MS_DAY = 1000 * 60 * 60 * 24

const toOrdinalDate = (year, month, date) => {
	const diff = Date.UTC(year, month, date) - Date.UTC(year, 0, 1)
	return 1 + Math.round(diff / MS_DAY)
}

export const ordinalDate = date =>
	toOrdinalDate(getFullYear(date), getMonth(date), getDate(date))

export const utcOrdinalDate = date =>
	toOrdinalDate(getUTCFullYear(date), getUTCMonth(date), getUTCDate(date))

export const dstOffset = date => {
	var jan = new Date(getFullYear(date), 0, 1)
	var jul = new Date(getFullYear(date), 6, 1)
	return jan.getTimezoneOffset() - jul.getTimezoneOffset()
}
