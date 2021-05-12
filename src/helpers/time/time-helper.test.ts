import { isoDatePrettier } from './'

describe('valid isoDatePrettier test cases', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(isoDatePrettier('1948-01-23T00:00:00.000Z')).toBe('23 January 1948')
  })

  test('1957-04-09 date prettier', () => {
    expect(isoDatePrettier('1957-04-09')).toBe('9 April 1957')
  })
})
