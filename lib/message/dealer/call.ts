import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { Args, CallOptions, ID, KwArgs, URI } from '../../types.js'

export class CallMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID
  @OrderedProperty(1)
  public readonly options: CallOptions
  @OrderedProperty(2)
  public readonly procedure: URI
  @OrderedProperty(3, true)
  public readonly args?: Args
  @OrderedProperty(4, true)
  public readonly kwArgs?: KwArgs

  constructor(
    requestId: ID,
    options: CallOptions,
    procedure: URI,
    args?: Args,
    kwArgs?: KwArgs,
  ) {
    super(MessageType.CALL)
    this.requestId = requestId
    this.options = options
    this.procedure = procedure
    this.args = args
    this.kwArgs = kwArgs
  }
}
