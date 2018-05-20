const { GormanDate } = require('../..')

describe('serialization', () => {
	test('GormanDate can be serialized and deserialized', () => {
		const d1 = new GormanDate(2018, 0, 1)
		const d2 = GormanDate.parse(d1.toString())
		expect(d2.getTime()).toBe(d1.getTime())
	})

	test('An invalid date is representend as such', () => {
		const date = new GormanDate(NaN)
		expect(String(date)).toBe('Invalid Date')
	})
})

describe('deserialization', () => {
	test('accepts valid gorman-string', () => {
		const str = '2018-123T00:00:00.000Z'
		expect(new GormanDate(str).getTime()).toBeTruthy()
	})

	test('rejects invalid string', () => {
		const str = ''
		expect(new GormanDate(str).getTime()).toBeFalsy()
	})

	describe('ordinal date', () => {
		test('rejects value below range', () => {
			const str = '2018-000T00:00:00.000Z'
			expect(new GormanDate(str).getTime()).toBeFalsy()
		})

		test('rejects value above range', () => {
			const str = '2018-367T00:00:00.000Z'
			expect(new GormanDate(str).getTime()).toBeFalsy()
		})

		test('honours leap year value', () => {
			const str = '2020-366T00:00:00.000Z'
			expect(new GormanDate(str).getFullYear()).toBe(2020)
		})

		test('rolls-over on non leap year excess', () => {
			const str = '2018-366T00:00:00.000Z'
			expect(new GormanDate(str).getFullYear()).toBe(2019)
		})
	})

	describe('time', () => {
		test('rejects hours outside range', () => {
			const str = '2018-001T24:00:00.000Z'
			expect(new GormanDate(str).getTime()).toBeFalsy()
		})

		test('rejects minutes outside range', () => {
			const str = '2018-001T00:60:00.000Z'
			expect(new GormanDate(str).getTime()).toBeFalsy()
		})

		test('rejects seconds outside range', () => {
			const str = '2018-001T00:00:60.000Z'
			expect(new GormanDate(str).getTime()).toBeFalsy()
		})
	})
})
