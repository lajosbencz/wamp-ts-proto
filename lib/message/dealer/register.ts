import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { ID, RegisterOptions, URI } from '../../types.js'

export class RegisterMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID
  @OrderedProperty(1)
  public readonly options: RegisterOptions
  @OrderedProperty(2)
  public readonly procedure: URI

  constructor(requestId: ID, options: RegisterOptions, procedure: URI) {
    super(MessageType.REGISTER)
    this.requestId = requestId
    this.options = options
    this.procedure = procedure
  }
}
