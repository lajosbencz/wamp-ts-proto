import type {
  ClientFeatures,
  RouterFeatures,
  ID,
  KwArgs,
  URI,
  Serializable,
} from '../types.js'
import { MessageType } from '../message.js'

export interface IMessage {
  readonly type: MessageType

  asArray(): Serializable[]
}

export type ErrorDetails = KwArgs & {
  message?: string
}

export type GoodbyeDetails = KwArgs & {
  message?: string
}

export type HelloDetails = KwArgs & {
  roles: ClientFeatures
  transport?: KwArgs
  authmethods?: string[]
  authid?: string
  authextra?: KwArgs
}

export type ChallengeDetails = KwArgs & {
  // @todo
  challenge?: string
}

export type AuthenticateDetails = KwArgs & {
  // @todo
}

export type WelcomeDetails = KwArgs & {
  roles: RouterFeatures
  agent?: string
  authextra?: KwArgs
}

export type EventDetails = KwArgs & {
  publisher: ID
  topic?: URI
  publisher_authid?: string
  publisher_authrole?: string
  retained?: boolean
  forward_for: string
}
