import { isString } from './util/types'
import { ordinalDate, utcOrdinalDate } from './util/date'
import { toDate, toDay, toMonth } from './util/ordinal-date'
import { toGorString, parse } from './util/gorman-date'

export class GormanDate extends Date {
	static of(...a) {
		return new GormanDate(...a)
	}

	static parse(str) {
		return new GormanDate(parse(str))
	}

	constructor(...a) {
		const [first] = a
		let parsed
		if (a.length === 1 && isString(first)) {
			parsed = parse(first)
		}
		super(...(parsed !== undefined ? [parsed] : a))
	}

	getGorDate() {
		return toDate(ordinalDate(this))
	}

	getGorDay() {
		return toDay(ordinalDate(this))
	}

	getGorFullYear() {
		return super.getFullYear()
	}

	getGorHours() {
		return
	}

	getGorMilliseconds() {
		return super.getMilliseconds()
	}

	getGorMinutes() {
		return super.getMinutes()
	}

	getGorMonth() {
		return toMonth(ordinalDate(this))
	}

	getGorSeconds() {
		return super.getSeconds()
	}

	getGorTime() {
		return super.getTime()
	}

	getUTCGorDate() {
		return toDate(utcOrdinalDate(this))
	}

	getUTCGorDay() {
		return toDay(utcOrdinalDate(this))
	}

	getUTCGorFullYear() {
		return super.getUTCFullYear()
	}

	getUTCGorHours() {
		return super.getUTCHours()
	}

	getUTCGorMilliseconds() {
		return super.getUTCMilliseconds()
	}

	getUTCGorMinutes() {
		return super.getUTCMinutes()
	}

	getUTCGorMonth() {
		return toMonth(utcOrdinalDate(this))
	}

	getUTCGorSeconds() {
		return super.getUTCSeconds()
	}

	setGorDate() {
		return
	}

	setGorFullYear() {
		return
	}

	setGorHours() {
		return
	}

	setGorMilliseconds() {
		return
	}

	setGorMinutes() {
		return
	}

	setGorMonth() {
		return
	}

	setGorSeconds() {
		return
	}

	setGorTime() {
		return
	}

	setUTCGorDate() {
		return
	}

	setUTCGorHours() {
		return
	}

	setUTCGorMilliseconds() {
		return
	}

	setUTCGorMinutes() {
		return
	}

	setUTCGorMonth() {
		return
	}

	setUTCGorSeconds() {
		return
	}

	toGorString() {
		return toGorString(this)
	}
}
