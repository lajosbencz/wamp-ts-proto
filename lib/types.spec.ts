import { describe, expect, it } from '@jest/globals'
import * as types from './types.js'

describe('types', () => {
  it('should nest', () => {
    const a = {
      x: true,
      y: 'a',
      z: 1,
      a: [true, 'a', 2, [true, 'a', 3], { foo: 'bar' }],
      b: { c: 'd' },
    }
    const b = a as types.KwArgs
    expect(b.x).toBe(true)
  })
})
