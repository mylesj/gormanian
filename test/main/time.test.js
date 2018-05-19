const { GormanDate } = require('../..')

describe('daylight savings should not exist', () => {
	test('during Greenwich Mean, hours should be the same as UTC', () => {
		const d = new Date('2018-01-01T12:00:00Z')
		const g = new GormanDate(d)
		expect(g.getHours()).toBe(d.getUTCHours())
	})

	test('during British Summer, hours should be the same as UTC', () => {
		const d = new Date('2018-06-01T12:00:00Z')
		const g = new GormanDate(d)
		expect(g.getHours()).toBe(d.getUTCHours())
	})
})
