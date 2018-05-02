import { isString } from './util/types'
import { clone, dstOffset, ordinalDate, utcOrdinalDate } from './util/date'
import { toDate, toDay, toMonth } from './util/ordinal-date'
import { toGormanString, parse } from './util/serialization'

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
			parsed = parse(first)
		}
		super(...(parsed !== undefined ? [parsed] : a))
	}

	getMonth() {
		return toMonth(ordinalDate(this.toDate()))
	}

	getDate() {
		return toDate(ordinalDate(this.toDate()))
	}

	getDay() {
		return toDay(ordinalDate(this.toDate()))
	}

	getHours() {
		const dst = Math.floor(dstOffset(this.toDate()) / 60)
		return super.getHours() - dst
	}

	getMinutes() {
		const dst = dstOffset(this.toDate()) % 60
		return super.getMinutes() - dst
	}

	getUTCMonth() {
		return toMonth(utcOrdinalDate(this.toDate()))
	}

	getUTCDate() {
		return toDate(utcOrdinalDate(this.toDate()))
	}

	getUTCDay() {
		return toDay(utcOrdinalDate(this.toDate()))
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
		return toGormanString(this.toDate())
	}

	toDate() {
		return clone(this)
	}
}
