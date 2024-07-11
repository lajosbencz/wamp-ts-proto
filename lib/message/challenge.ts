import { Message, MessageType } from '../message.js'
import { OrderedProperty } from '../decorators.js'
import type { ChallengeDetails } from '../types.js'

export class ChallengeMessage extends Message {
  @OrderedProperty(0)
  public readonly authmethod: string
  @OrderedProperty(1, true)
  public readonly extra?: ChallengeDetails

  constructor(authmethod: string, extra?: ChallengeDetails) {
    super(MessageType.CHALLENGE)
    this.authmethod = authmethod
    this.extra = extra
  }
}
