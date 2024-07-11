import {
  Args,
  ID,
  KwArgs,
  PrimitiveType,
  URI,
  PayloadPassthruDetails, MatchType,
} from '../types.js'

export interface SubscriptionDetails {
  publication: ID
  topic: URI
  publisher?: ID
  publisher_authid?: string
  publisher_authrole?: string
  retained?: boolean
  forward_for?: KwArgs | PrimitiveType
}

export interface SubscriptionType {
  topic: URI
  handler: SubscriptionHandler
  options: KwArgs
  id: ID
  active: boolean
}

export type SubscriptionHandler = (
  args: Args,
  kwArgs: KwArgs,
  details: SubscriptionDetails,
  subscription: SubscriptionType,
) => void | Promise<void>

export interface PublicationType {
  id: ID
}

export type SubscribeOptionsMatch = MatchType

export interface SubscribeOptions {
  match?: SubscribeOptionsMatch
  nkey?: string
  get_retained?: boolean
}

export type UnsubscribedDetails = KwArgs & {
  // @todo
}

export type PublishOptionsBase = Partial<PayloadPassthruDetails> & {
  acknowledge?: boolean
  exclude?: ID[]
  exclude_authid?: string[]
  exclude_authrole?: string[]
  eligible?: ID[]
  eligible_authid?: string[]
  eligible_authrole?: string[]
  exclude_me?: boolean
  disclose_me?: boolean
  rkey?: string
  retain?: boolean
}

export type PublishOptions =
  | PublishOptionsBase
  | (PublishOptionsBase & PayloadPassthruDetails)
