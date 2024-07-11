import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { Args, ID, KwArgs, ResultDetails } from '../../types.js'

export class ResultMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID
  @OrderedProperty(1)
  public readonly details: ResultDetails
  @OrderedProperty(2, true)
  public readonly args?: Args
  @OrderedProperty(3, true)
  public readonly kwArgs?: KwArgs

  constructor(
    requestId: ID,
    details: ResultDetails,
    args?: Args,
    kwArgs?: KwArgs,
  ) {
    super(MessageType.RESULT)
    this.requestId = requestId
    this.details = details
    this.args = args
    this.kwArgs = kwArgs
  }
}
