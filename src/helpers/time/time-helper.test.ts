import { isoDatePrettier, timePrettier } from './'

// timePrettier
describe('timePrettier success cases', () => {
  test('179 min expect 2h 26m', () => {
    expect(timePrettier('179 min')).toBe('2h 59m')
  })

  test('60 min expect 1h', () => {
    expect(timePrettier('60 min')).toBe('1h')
  })

  test('24 min expect 24m', () => {
    expect(timePrettier('24 min')).toBe('24m')
  })
})

// isoDatePrettier
describe('isoDatePrettier success cases', () => {
  test('1948-01-23T00:00:00.000Z expect 23 January 1948', () => {
    expect(isoDatePrettier('1948-01-23T00:00:00.000Z')).toBe('23 January 1948')
  })

  test('1957-04-09 expect 9 April 1957', () => {
    expect(isoDatePrettier('1957-04-09')).toBe('9 April 1957')
  })
})
