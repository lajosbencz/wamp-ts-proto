import { describe, expect, it } from '@jest/globals'
import { AbortMessage } from './message/dealer/abort.js'

describe('Message', () => {
  it('it shold handle optional args', () => {
    expect(new AbortMessage({}, '').asArray()).toStrictEqual([3, {}, ''])
    expect(new AbortMessage({}, '', []).asArray()).toStrictEqual([
      3,
      {},
      '',
      [],
    ])
    expect(new AbortMessage({}, '', undefined, {}).asArray()).toStrictEqual([
      3,
      {},
      '',
      [],
      {},
    ])
    expect(new AbortMessage({}, '', [], {}).asArray()).toStrictEqual([
      3,
      {},
      '',
      [],
      {},
    ])
  })
})
