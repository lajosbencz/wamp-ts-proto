import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { ID, UnregisteredDetails } from '../../types.js'

export class UnregisteredMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID
  @OrderedProperty(1, true)
  public readonly details?: UnregisteredDetails

  constructor(requestId: ID, details?: UnregisteredDetails) {
    super(MessageType.UNREGISTERED)
    this.requestId = requestId
    this.details = details
  }
}
