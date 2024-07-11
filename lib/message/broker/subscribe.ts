import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { ID, SubscribeOptions, URI } from '../../types.js'

export class SubscribeMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID
  @OrderedProperty(1)
  public readonly options: SubscribeOptions
  @OrderedProperty(2)
  public readonly topic: URI

  constructor(requestId: ID, options: SubscribeOptions, topic: URI) {
    super(MessageType.SUBSCRIBE)
    this.requestId = requestId
    this.options = options
    this.topic = topic
  }
}
