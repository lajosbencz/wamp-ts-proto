import { Message, MessageType } from '../message.js'
import { OrderedProperty } from '../decorators.js'
import type { GoodbyeDetails, URI } from '../types.js'

export class GoodbyeMessage extends Message {
  @OrderedProperty(0)
  public readonly details: GoodbyeDetails
  @OrderedProperty(1)
  public readonly reason: URI

  constructor(details: GoodbyeDetails, reason: URI) {
    super(MessageType.GOODBYE)
    this.details = details
    this.reason = reason
  }
}
