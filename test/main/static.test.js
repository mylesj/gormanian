const { GormanDate } = require('../..')

describe('GormanDate.of', () => {
	test('return an instance of GormanDate', () => {
		expect(GormanDate.of() instanceof GormanDate).toBe(true)
	})
})

describe('GormanDate.parse', () => {
	test('should return an instance of GormanDate', () => {
		expect(GormanDate.parse() instanceof GormanDate).toBe(true)
	})
})
