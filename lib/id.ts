import type { ID, IdGenerator } from './types.js'

export const MAX_ID = Number.MAX_SAFE_INTEGER

export class SessionIdGenerator implements IdGenerator {
  constructor(protected initialId: ID = 1) {}

  next(): ID {
    if (this.initialId >= MAX_ID) {
      this.initialId = 1
    }
    return this.initialId++
  }
}

export class GlobalIdGenerator implements IdGenerator {
  next(): ID {
    return Math.floor(Math.random() * MAX_ID) + 1
  }
}
