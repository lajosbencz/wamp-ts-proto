import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { Args, EventDetails, ID, KwArgs } from '../../types.js'

export class EventMessage extends Message {
  @OrderedProperty(0)
  public readonly subscriptionId: ID
  @OrderedProperty(1)
  public readonly publicationId: ID
  @OrderedProperty(2)
  public readonly details: EventDetails
  @OrderedProperty(3, true)
  public readonly args?: Args
  @OrderedProperty(4, true)
  public readonly kwArgs?: KwArgs

  constructor(
    subscriptionId: ID,
    publicationId: ID,
    details: EventDetails,
    args?: Args,
    kwArgs?: KwArgs,
  ) {
    super(MessageType.EVENT)
    this.subscriptionId = subscriptionId
    this.publicationId = publicationId
    this.details = details
    this.args = args
    this.kwArgs = kwArgs
  }
}
