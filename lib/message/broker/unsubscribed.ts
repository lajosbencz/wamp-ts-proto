import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { ID, UnsubscribedDetails } from '../../types.js'

export class UnsubscribedMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID
  @OrderedProperty(1, true)
  public readonly details?: UnsubscribedDetails

  constructor(requestId: ID, details?: UnsubscribedDetails) {
    super(MessageType.UNSUBSCRIBED)
    this.requestId = requestId
    this.details = details
  }
}
