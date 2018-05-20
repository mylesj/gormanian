const { GormanDate } = require('../..')

describe('the first day of every year should be a Sunday', () => {
	test('2019', () => {
		const date = new GormanDate(new Date(2019, 0, 1))
		expect(date.getDay()).toBe(0)
	})

	test('2020', () => {
		const date = new GormanDate(new Date(2020, 0, 1))
		expect(date.getDay()).toBe(0)
	})

	test('2021', () => {
		const date = new GormanDate(new Date(2021, 0, 1))
		expect(date.getDay()).toBe(0)
	})
})

describe("Dave's birthday", () => {
	test('2nd of the 3rd month should map to 5th of the 3rd month', () => {
		const date = new GormanDate(new Date(1971, 2, 2))
		const result = [date.getMonth(), date.getDate()]
		expect(result).toEqual([2, 5])
	})
})

describe('April fools day', () => {
	test('should always land on Saturday the 7th of the 4th month', () => {
		const date = new GormanDate(new Date(2018, 3, 1))
		const result = [date.getDay(), date.getMonth(), date.getDate()]
		expect(result).toEqual([6, 3, 7])
	})
})

describe('November the 5th', () => {
	test('remember remember the 1st of February', () => {
		const date = new GormanDate(new Date(2018, 10, 5))
		const result = [date.getDay(), date.getMonth(), date.getDate()]
		expect(result).toEqual([0, 11, 1])
	})
})

describe('month length', () => {
	const date = ord =>
		new GormanDate(`2018-${String(ord).padStart(3, 0)}T00:00:00.000Z`)

	test('28 days hath March', () => {
		expect(date(28).getMonth()).toBe(0)
	})

	test('April, May and June', () => {
		expect(date(56).getMonth()).toBe(1)
		expect(date(84).getMonth()).toBe(2)
		expect(date(112).getMonth()).toBe(3)
	})

	test('all the rest have 28 too', () => {
		expect(date(140).getMonth()).toBe(4)
		expect(date(168).getMonth()).toBe(5)
		expect(date(196).getMonth()).toBe(6)
		expect(date(224).getMonth()).toBe(7)
	})

	test("because that's how long a month is", () => {
		expect(date(252).getMonth()).toBe(8)
		expect(date(280).getMonth()).toBe(9)
		expect(date(308).getMonth()).toBe(10)
		expect(date(336).getMonth()).toBe(11)
		expect(date(364).getMonth()).toBe(12)
	})
})
