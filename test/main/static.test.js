const { GormanDate } = require('../..')

describe('GormanDate.of', () => {
	test('should return an instance of GormanDate', () => {
		expect(GormanDate.of() instanceof GormanDate).toBe(true)
	})
})

describe('GormanDate.parse', () => {
	test('should return an instance of GormanDate', () => {
		expect(GormanDate.parse() instanceof GormanDate).toBe(true)
	})
})

describe('GormanDate.constructor', () => {
	test('should accept a gormanian date-string', () => {
		const str = '2018-001T00:00:00.000Z'
		expect(new GormanDate(str).getTime()).toBeTruthy()
	})
	test('should accept a long form gormanian date-string', () => {
		const str = '-000001-001T00:00:00.000Z'
		expect(new GormanDate(str).getTime()).toBeTruthy()
	})
	test('should accept a regular date-string', () => {
		const str = '2018-01-01T00:00:00'
		expect(new GormanDate(str).getTime()).toBeTruthy()
	})
	test('should accept another gorman date', () => {
		const gd = new GormanDate()
		expect(new GormanDate(gd).getTime()).toBe(gd.getTime())
	})
	test('should accept another date', () => {
		const d = new Date()
		expect(new GormanDate(d).getTime()).toBe(d.getTime())
	})
	test('should accept a millisecond value', () => {
		const ms = Date.now()
		expect(new GormanDate(ms).getTime()).toBe(ms)
	})
	test('should accept [Y, M, D, h, m, s, ms] values', () => {
		const input = [2018, 0, 1, 12, 0, 0, 0]
		expect(new GormanDate(...input).getTime()).toBeTruthy()
	})
})
