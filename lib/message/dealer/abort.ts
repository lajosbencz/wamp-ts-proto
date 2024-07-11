import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { AbortDetails, Args, KwArgs, URI } from '../../types.js'

export class AbortMessage extends Message {
  @OrderedProperty(0)
  public readonly details: AbortDetails

  @OrderedProperty(1)
  public readonly reason: URI

  @OrderedProperty(2, true)
  public readonly args?: Args

  @OrderedProperty(3, true)
  public readonly kwArgs?: KwArgs

  constructor(
    details: AbortDetails,
    reason: URI,
    args?: Args,
    kwArgs?: KwArgs,
  ) {
    super(MessageType.ABORT)
    this.details = details
    this.reason = reason
    this.args = args
    this.kwArgs = kwArgs
  }
}
