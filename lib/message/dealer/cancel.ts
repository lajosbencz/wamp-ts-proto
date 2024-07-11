import { Message, MessageType } from '../../message.js'
import { OrderedProperty } from '../../decorators.js'
import type { CancelOptions, ID } from '../../types.js'

export class CancelMessage extends Message {
  @OrderedProperty(0)
  public readonly requestId: ID
  @OrderedProperty(1)
  public readonly options: CancelOptions

  constructor(requestId: ID, options: CancelOptions) {
    super(MessageType.CANCEL)
    this.requestId = requestId
    this.options = options
  }
}
