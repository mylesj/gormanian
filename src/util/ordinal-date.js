const fromOrdinalDate = calculate => ord =>
	isNaN(ord) ? NaN : ord > 364 ? -1 : calculate(ord)

export const toMonth = fromOrdinalDate(ord => Math.floor(ord / 28))
export const toDate = fromOrdinalDate(ord => ord % 28)
export const toDay = fromOrdinalDate(ord => ord % 7)
