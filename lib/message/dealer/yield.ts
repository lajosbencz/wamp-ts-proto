import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { Args, ID, KwArgs, YieldOptions } from '../../types.js'

export class YieldMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID

  @OrderedProperty(1)
  public readonly options: YieldOptions

  @OrderedProperty(2, true)
  public readonly args?: Args

  @OrderedProperty(3, true)
  public readonly kwArgs?: KwArgs

  constructor(
    requestId: ID,
    options: YieldOptions,
    args?: Args,
    kwArgs?: KwArgs,
  ) {
    super(MessageType.YIELD)
    this.requestId = requestId
    this.options = options
    this.args = args
    this.kwArgs = kwArgs
  }
}
