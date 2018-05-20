const { GormanDate } = require('../..')

describe('DST should be stripped without breaking timezones', () => {
	const PST_OFFSET = +10 // Australia/Sydney

	test('during southern hemisphere DST, use the standard UTC offset', () => {
		const d = new Date('2018-01-01T12:00:00Z')
		const g = new GormanDate(d)
		expect(g.getHours()).toBe(d.getUTCHours() + PST_OFFSET)
	})

	test('during standard time, use the standard UTC offset', () => {
		const d = new Date('2018-06-01T12:00:00Z')
		const g = new GormanDate(d)
		expect(g.getHours()).toBe(d.getUTCHours() + PST_OFFSET)
	})
})
