const { GormanDate } = require('../..')

describe('during intermission', () => {
	let date
	let leapDate
	beforeEach(() => {
		date = new GormanDate('2018-365T00:00:00.000Z')
		leapDate = new GormanDate('2020-366T00:00:00.000Z')
	})

	test('getMonth should return -1', () => {
		expect(date.getMonth()).toBe(-1)
	})

	test('getMonth should return -1 for leap dates', () => {
		expect(leapDate.getMonth()).toBe(-1)
	})

	test('getDate should return -1', () => {
		expect(date.getDate()).toBe(-1)
	})

	test('getDate should return -1 for leap dates', () => {
		expect(leapDate.getDate()).toBe(-1)
	})

	test('getDay should return -1', () => {
		expect(date.getDay()).toBe(-1)
	})

	test('getDay should return -1 for leap dates', () => {
		expect(leapDate.getDay()).toBe(-1)
	})
})
