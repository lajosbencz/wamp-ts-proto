import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { ID } from '../../types.js'

export class UnsubscribeMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID
  @OrderedProperty(1)
  public readonly id: ID

  constructor(requestId: ID, id: ID) {
    super(MessageType.UNSUBSCRIBE)
    this.requestId = requestId
    this.id = id
  }
}
