import { entries } from '../src/ts-entries'

describe('entries', () => {
  it('works', () => {
    const o = { a: 1, b: 'b' }
    expect(entries(o)).toEqual([['a', 1], ['b', 'b']])
  })
})
