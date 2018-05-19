const { GormanDate } = require('../..')

describe('DST should be stripped without breaking timezones', () => {
	const PST_OFFSET = -8 // America/Los_Angeles

	test('during PST, hours should honour the standard offset', () => {
		const d = new Date('2018-01-01T12:00:00Z')
		const g = new GormanDate(d)
		expect(g.getHours()).toBe(d.getUTCHours() + PST_OFFSET)
	})

	test('during PDT, hours should behave like PST', () => {
		const d = new Date('2018-06-01T12:00:00Z')
		const g = new GormanDate(d)
		expect(g.getHours()).toBe(d.getUTCHours() + PST_OFFSET)
	})
})
