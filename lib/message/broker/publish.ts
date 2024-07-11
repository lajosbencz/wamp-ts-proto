import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { Args, ID, KwArgs, PublishOptions, URI } from '../../types.js'

export class PublishMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID
  @OrderedProperty(1)
  public readonly options: PublishOptions
  @OrderedProperty(2)
  public readonly topic: URI
  @OrderedProperty(3, true)
  public readonly args?: Args
  @OrderedProperty(4, true)
  public readonly kwArgs?: KwArgs

  constructor(
    requestId: ID,
    options: PublishOptions,
    topic: URI,
    args?: Args,
    kwArgs?: KwArgs,
  ) {
    super(MessageType.PUBLISH)
    this.requestId = requestId
    this.options = options
    this.topic = topic
    this.args = args
    this.kwArgs = kwArgs
  }
}
