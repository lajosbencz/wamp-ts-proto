import { Message, MessageType } from '../message.js'
import { OrderedProperty } from '../decorators.js'
import type { HelloDetails, URI } from '../types.js'

export class HelloMessage extends Message {
  @OrderedProperty(0)
  public readonly realm: URI
  @OrderedProperty(1, true)
  public readonly details?: HelloDetails

  constructor(realm: URI, details?: HelloDetails) {
    super(MessageType.HELLO)
    this.realm = realm
    this.details = details
  }
}
