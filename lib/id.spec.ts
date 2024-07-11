import { describe, expect, it } from '@jest/globals'
import { GlobalIdGenerator, SessionIdGenerator } from './id.js'

describe('GlobalIdGenerator', () => {
  const g = new GlobalIdGenerator()
  it('should generate guids', () => {
    let last = g.next()
    for (let i = 0; i < 500; i++) {
      const a = g.next()
      const b = g.next()
      expect(a).not.toEqual(b)
      expect(a).toBeGreaterThan(0n)
      expect(b).toBeGreaterThan(0n)
      expect(last).not.toEqual(a)
      expect(last).not.toEqual(b)
      last = a
    }
  })
})

describe('SessionIdGenerator', () => {
  const i = 42
  const g = new SessionIdGenerator(i)
  it('should respect initial id', () => {
    const a = g.next()
    expect(a).toEqual(i)
    expect(a).toBeGreaterThan(0n)
  })
  it('should generate sequential ids', () => {
    const a = g.next()
    const b = g.next()
    expect(a).not.toEqual(b)
    expect(a).toBeGreaterThan(0n)
    expect(b).toBeGreaterThan(0n)
    expect(b).toBeGreaterThan(a)
  })
})
