import { Message, MessageType } from '../message.js'
import { OrderedProperty } from '../decorators.js'
import type { AuthenticateDetails } from '../types.js'

export class AuthenticateMessage extends Message {
  @OrderedProperty(0)
  public readonly signature: string

  @OrderedProperty(1, true)
  public readonly extra?: AuthenticateDetails

  constructor(signature: string, extra?: AuthenticateDetails) {
    super(MessageType.AUTHENTICATE)
    this.signature = signature
    this.extra = extra
  }
}
