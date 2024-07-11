import { Message, MessageType } from '../message.js'
import { OrderedProperty } from '../decorators.js'
import type { ID, WelcomeDetails } from '../types.js'

export class WelcomeMessage extends Message {
  @OrderedProperty(0)
  public readonly sessionId: ID
  @OrderedProperty(1)
  public readonly details: WelcomeDetails

  constructor(sessionId: ID, details: WelcomeDetails) {
    super(MessageType.WELCOME)
    this.sessionId = sessionId
    this.details = details
  }
}
