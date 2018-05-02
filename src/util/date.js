const MS_DAY = 1000 * 60 * 60 * 24

const toOrdinalDate = (year, month, date) => {
	const diff = Date.UTC(year, month, date) - Date.UTC(year, 0, 1)
	return 1 + Math.round(diff / MS_DAY)
}

export const clone = date => new Date(Date.prototype.getTime.call(date))

export const ordinalDate = date =>
	toOrdinalDate(date.getFullYear(), date.getMonth(), date.getDate())

export const utcOrdinalDate = date =>
	toOrdinalDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
