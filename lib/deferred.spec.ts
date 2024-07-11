import { describe, expect, it } from '@jest/globals'
import { asCancelable, Deferred } from './deferred.js'

describe('Deferred', () => {
  it('should ante resolve', async () => {
    const d = new Deferred()
    d.resolve(1)
    expect(await d.promise).toEqual(1)
  })

  it('should ante reject', async () => {
    const d = new Deferred()
    d.reject(new Error('test'))
    try {
      await d.promise
      expect(false).toBe(true)
    } catch (e: any) {
      expect(e.message).toBe('test')
    }
  })

  it('should resolve', async () => {
    const d = new Deferred()
    setTimeout(() => d.resolve(1), 10)
    expect(await d.promise).toEqual(1)
  })

  it('should reject', async () => {
    const d = new Deferred()
    setTimeout(() => d.reject(new Error('test')), 10)
    try {
      await d.promise
      expect(false).toBe(true)
    } catch (e: any) {
      expect(e.message).toBe('test')
    }
  })

  it('should resolve before timer', async () => {
    const d = new Deferred()
    setTimeout(() => d.resolve(1), 50)
    const res = await Promise.race([
      d.promise,
      new Promise(r => setTimeout(() => r(2), 100)),
    ])
    expect(res).toEqual(1)
  })
})

describe('asCancelable', () => {
  it('should cancel', async () => {
    const wait = async (ms: number) => new Promise(r => setTimeout(r, ms))
    const { promise, cancel } = asCancelable(wait(50))
    setTimeout(cancel, 1)
    try {
      await promise
      expect(false).toBe(true)
    } catch (e: any) {
      expect(e).toBeUndefined()
    }
  })
})
