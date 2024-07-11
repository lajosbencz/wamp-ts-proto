import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { ID, InterruptOptions } from '../../types.js'

export class InterruptMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID
  @OrderedProperty(1)
  public readonly options: InterruptOptions

  constructor(requestId: ID, options: InterruptOptions) {
    super(MessageType.INTERRUPT)
    this.requestId = requestId
    this.options = options
  }
}
