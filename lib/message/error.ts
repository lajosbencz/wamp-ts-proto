import { Message, MessageType } from '../message.js'
import { OrderedProperty } from '../decorators.js'
import type { Args, ErrorDetails, ID, KwArgs, URI } from '../types.js'

export class ErrorMessage extends Message {
  @OrderedProperty(0)
  public readonly errorType: MessageType
  @OrderedProperty(1)
  public readonly requestId: ID
  @OrderedProperty(2)
  public readonly details: ErrorDetails
  @OrderedProperty(3)
  public readonly error: URI
  @OrderedProperty(4, true)
  public readonly args?: Args
  @OrderedProperty(5, true)
  public readonly kwArgs?: KwArgs

  constructor(
    errorType: MessageType,
    requestId: ID,
    details: ErrorDetails,
    error: URI,
    args?: Args,
    kwArgs?: KwArgs,
  ) {
    super(MessageType.ERROR)
    this.errorType = errorType
    this.requestId = requestId
    this.details = details
    this.error = error
    this.args = args
    this.kwArgs = kwArgs
  }
}
