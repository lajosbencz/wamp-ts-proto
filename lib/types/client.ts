import {
  Args,
  CallOptions,
  KwArgs,
  PublicationType,
  PublishOptions,
  RegistrationCallback,
  RegistrationType,
  Serializable,
  SubscribeOptions,
  SubscriptionHandler,
  SubscriptionType,
  URI,
} from '../types.js'

export interface ClientBroker {
  publish(
    topic: URI,
    args: Args,
    kwArgs: KwArgs,
    options?: PublishOptions,
  ): Promise<PublicationType>

  subscribe(
    topic: URI,
    handler: SubscriptionHandler,
    options?: SubscribeOptions,
  ): Promise<SubscriptionType>
}

export interface ClientDealer {
  register(
    rpc: URI,
    endpoint: RegistrationCallback,
    options?: RegistrationOptions,
  ): Promise<RegistrationType>

  call(
    rpc: URI,
    args?: Args,
    kwArgs?: KwArgs,
    options?: CallOptions,
  ): Promise<Serializable | void>
}

export type Client = ClientBroker & ClientDealer
