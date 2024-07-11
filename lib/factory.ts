import type {
  IMessage,
  ISerializer,
  AbortDetails,
  Args,
  AuthenticateDetails,
  CallOptions,
  CancelOptions,
  ChallengeDetails,
  EventDetails,
  GoodbyeDetails,
  HelloDetails,
  ID,
  InvocationDetails,
  KwArgs,
  ProtocolType,
  PublishOptions,
  RegisterOptions,
  ResultDetails,
  SerializerType,
  SubscribeOptions,
  URI,
  WelcomeDetails,
  YieldOptions,
  Serializable,
} from './types.js'
import * as M from './message/index.js'
import { MessageType } from './message.js'
import { JsonSerializer } from './serializer/json.js'
import { Serializers } from './serializer.js'
import { Protocols } from './protocol.js'

export function messageFromArray(a: Serializable[]): IMessage {
  const type = a.shift() as MessageType
  switch (type) {
    case MessageType.HELLO:
      return new M.HelloMessage(a[0] as URI, a[1] as HelloDetails)
    case MessageType.WELCOME:
      return new M.WelcomeMessage(a[0] as ID, a[1] as WelcomeDetails)
    case MessageType.ABORT:
      return new M.AbortMessage(
        a[0] as AbortDetails,
        a[1] as URI,
        a[2] as Args,
        a[3] as KwArgs,
      )
    case MessageType.CHALLENGE:
      return new M.ChallengeMessage(a[0] as URI, a[1] as ChallengeDetails)
    case MessageType.AUTHENTICATE:
      return new M.AuthenticateMessage(a[0] as URI, a[1] as AuthenticateDetails)
    case MessageType.GOODBYE:
      return new M.GoodbyeMessage(a[0] as GoodbyeDetails, a[1] as URI)
    case MessageType.ERROR:
      return new M.ErrorMessage(
        a[0] as MessageType,
        a[1] as ID,
        a[2] as KwArgs,
        a[3] as URI,
        a[4] as Args,
        a[5] as KwArgs,
      )
    case MessageType.PUBLISH:
      return new M.PublishMessage(
        a[0] as ID,
        a[1] as PublishOptions,
        a[2] as URI,
        a[3] as Args,
        a[4] as KwArgs,
      )
    case MessageType.PUBLISHED:
      return new M.PublishedMessage(a[0] as ID, a[1] as ID)
    case MessageType.SUBSCRIBE:
      return new M.SubscribeMessage(
        a[0] as ID,
        a[1] as SubscribeOptions,
        a[2] as URI,
      )
    case MessageType.SUBSCRIBED:
      return new M.SubscribedMessage(a[0] as ID, a[1] as ID)
    case MessageType.UNSUBSCRIBE:
      return new M.UnsubscribeMessage(a[0] as ID, a[1] as ID)
    case MessageType.UNSUBSCRIBED:
      return new M.UnsubscribedMessage(a[0] as ID, a[1] as KwArgs)
    case MessageType.EVENT:
      return new M.EventMessage(
        a[0] as ID,
        a[1] as ID,
        a[2] as EventDetails,
        a[3] as Args,
        a[4] as KwArgs,
      )
    case MessageType.CALL:
      return new M.CallMessage(
        a[0] as ID,
        a[1] as CallOptions,
        a[2] as URI,
        a[3] as Args,
        a[4] as KwArgs,
      )
    case MessageType.CANCEL:
      return new M.CancelMessage(a[0] as ID, a[1] as CancelOptions)
    case MessageType.RESULT:
      return new M.ResultMessage(
        a[0] as ID,
        a[1] as ResultDetails,
        a[2] as Args,
        a[3] as KwArgs,
      )
    case MessageType.REGISTER:
      return new M.RegisterMessage(
        a[0] as ID,
        a[1] as RegisterOptions,
        a[2] as URI,
      )
    case MessageType.REGISTERED:
      return new M.RegisteredMessage(a[0] as ID, a[1] as ID)
    case MessageType.UNREGISTER:
      return new M.UnregisterMessage(a[0] as ID, a[1] as ID)
    case MessageType.UNREGISTERED:
      return new M.UnregisteredMessage(a[0] as ID, a[1] as KwArgs)
    case MessageType.INVOCATION:
      return new M.InvocationMessage(
        a[0] as ID,
        a[1] as ID,
        a[2] as InvocationDetails,
        a[3] as Args,
        a[4] as KwArgs,
      )
    case MessageType.INTERRUPT:
      return new M.InterruptMessage(a[0] as ID, a[1] as KwArgs)
    case MessageType.YIELD:
      return new M.YieldMessage(
        a[0] as ID,
        a[1] as YieldOptions,
        a[2] as Args,
        a[3] as KwArgs,
      )
    default:
      throw new Error(`Unknown message type: ${type as string}`)
  }
}

export function serializerFromProtocolType(p: ProtocolType): SerializerType {
  switch (p) {
    case Protocols.Json:
      return Serializers.Json
    case Protocols.Msgpack:
      return Serializers.Msgpack
    case Protocols.Cbor:
      return Serializers.Cbor
    default:
      throw new Error(`Unknown protocol type: ${p}`)
  }
}

export async function useSerializer(s: SerializerType): Promise<ISerializer> {
  switch (s) {
    case Serializers.Json:
      return JsonSerializer.instance()
    case Serializers.Msgpack:
      return (
        await import('./serializer/msgpack.js')
      ).MsgpackSerializer.instance()
    case Serializers.Cbor:
      return (await import('./serializer/cbor.js')).CborSerializer.instance()
    default:
      throw new Error(`Unknown serializer type: ${s}`)
  }
}
