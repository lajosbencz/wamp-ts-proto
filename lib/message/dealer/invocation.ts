import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { Args, ID, InvocationDetails, KwArgs } from '../../types.js'

export class InvocationMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID
  @OrderedProperty(1)
  public readonly registrationId: ID
  @OrderedProperty(2)
  public readonly details: InvocationDetails
  @OrderedProperty(3, true)
  public readonly args?: Args
  @OrderedProperty(4, true)
  public readonly kwArgs?: KwArgs

  constructor(
    requestId: ID,
    registrationId: ID,
    details: InvocationDetails,
    args?: Args,
    kwArgs?: KwArgs,
  ) {
    super(MessageType.INVOCATION)
    this.requestId = requestId
    this.registrationId = registrationId
    this.details = details
    this.args = args
    this.kwArgs = kwArgs
  }
}
