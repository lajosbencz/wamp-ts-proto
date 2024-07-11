import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { ID } from '../../types.js'

export class UnregisterMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID
  @OrderedProperty(1)
  public readonly registrationId: ID

  constructor(requestId: ID, registrationId: ID) {
    super(MessageType.UNREGISTER)
    this.requestId = requestId
    this.registrationId = registrationId
  }
}
