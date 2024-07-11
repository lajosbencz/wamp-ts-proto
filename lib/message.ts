import 'reflect-metadata'
import {
  OPTIONAL_PROPERTIES_KEY,
  ORDERED_PROPERTIES_KEY,
} from './decorators.js'
import type { IMessage, Serializable } from './types.js'

export enum MessageType {
  HELLO = 1,
  WELCOME = 2,
  ABORT = 3,
  CHALLENGE = 4,
  AUTHENTICATE = 5,
  GOODBYE = 6,
  ERROR = 8,
  PUBLISH = 16,
  PUBLISHED = 17,
  SUBSCRIBE = 32,
  SUBSCRIBED = 33,
  UNSUBSCRIBE = 34,
  UNSUBSCRIBED = 35,
  EVENT = 36,
  CALL = 48,
  CANCEL = 49,
  RESULT = 50,
  REGISTER = 64,
  REGISTERED = 65,
  UNREGISTER = 66,
  UNREGISTERED = 67,
  INVOCATION = 68,
  INTERRUPT = 69,
  YIELD = 70,
}

export function defaultValueOfProperty(prop: string): Serializable {
  switch (prop) {
    case 'args':
      return []
    case 'kwArgs':
    case 'details':
    case 'options':
    case 'extra':
      return {}
    default:
      throw new Error(`Failed to determine default value for ${prop}`)
  }
}

export abstract class Message implements IMessage {
  constructor(type: MessageType) {
    this._type = type
  }

  protected _type: MessageType

  get type(): MessageType {
    return this._type
  }

  getOrderedProperties(): string[] {
    const orderedProps = Reflect.getMetadata(ORDERED_PROPERTIES_KEY, this) as {
      key: string
      order: number
    }[]
    orderedProps.sort((a, b) => a.order - b.order)
    return orderedProps.map(({ key }) => key)
  }

  getOptionalProperties(): string[] {
    const optionalProps = Reflect.getMetadata(
      OPTIONAL_PROPERTIES_KEY,
      this,
    ) as string[]
    return this.getOrderedProperties().filter(key =>
      optionalProps.includes(key),
    )
  }

  isOptionalProperty(property: string): boolean {
    const optionalProps = Reflect.getMetadata(
      OPTIONAL_PROPERTIES_KEY,
      this,
    ) as string[]
    return optionalProps.includes(property)
  }

  asArray(): Serializable[] {
    const revArray = []
    const revOrder = this.getOrderedProperties().reverse()
    let fillWithDefault = false
    revOrder.forEach(prop => {
      const val = (this as unknown as Record<string, Serializable | undefined>)[
        prop
      ]
      if (val === undefined) {
        if (this.isOptionalProperty(prop)) {
          if (fillWithDefault) {
            revArray.push(defaultValueOfProperty(prop))
          }
          return
        }
        throw new Error(
          `Required property ${prop} is missing from message ${this.constructor.name}`,
        )
      }
      fillWithDefault = true
      revArray.push(val)
    })
    revArray.push(this.type)
    return revArray.reverse()
  }
}
