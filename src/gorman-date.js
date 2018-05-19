import { isString } from './util/types'
import { dstOffset, ordinalDate, utcOrdinalDate } from './util/date-time'
import { toDate, toDay, toMonth } from './util/ordinal-date'
import { toGormanString, fromGormanString } from './util/serialization'

export class GormanDate extends Date {
	static of(...a) {
		return new GormanDate(...a)
	}

	static parse(str) {
		return new GormanDate(str)
	}

	constructor(...a) {
		const [first] = a
		let parsed
		if (a.length === 1 && isString(first)) {
			parsed = fromGormanString(first)
			if (Number.isNaN(parsed)) parsed = new Date(first).getTime()
		}
		super(...(parsed !== undefined ? [parsed] : a))
	}

	getMonth() {
		return toMonth(ordinalDate(this))
	}

	getDate() {
		return toDate(ordinalDate(this))
	}

	getDay() {
		return toDay(ordinalDate(this))
	}

	getHours() {
		const dst = Math.floor(dstOffset(this) / 60)
		return super.getHours() - dst
	}

	getMinutes() {
		const dst = dstOffset(this) % 60
		return super.getMinutes() - dst
	}

	getUTCMonth() {
		return toMonth(utcOrdinalDate(this))
	}

	getUTCDate() {
		return toDate(utcOrdinalDate(this))
	}

	getUTCDay() {
		return toDay(utcOrdinalDate(this))
	}

	setMonth() {
		return
	}

	setDate() {
		return
	}

	setHours() {
		return
	}

	setUTCMonth() {
		return
	}

	setUTCDate() {
		return
	}

	setUTCHours() {
		return
	}

	toString() {
		return toGormanString(this)
	}

	toDate() {
		return new Date(this.getTime())
	}
}
