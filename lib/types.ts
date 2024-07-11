export type ID = number

export type URI = string

export type PrimitiveType = number | string | boolean | null

export type Args = (KwArgs | Args | PrimitiveType)[]

export interface KwArgs {
  [key: string]: PrimitiveType | Args | KwArgs
}

export type Serializable = PrimitiveType | Args | KwArgs
export type SerializedString = string
export type SerializedBinary = Uint8Array | Buffer
export type Serialized = SerializedString | SerializedBinary

export type NestedArray<T> = (NestedArray<T> | T)[]

export interface NestedDictionary<T> {
  [key: string]: NestedDictionary<T> | T
}

export type MatchType = 'exact' | 'prefix' | 'wildcard'

export type ProtocolType = 'wamp.2.json' | 'wamp.2.msgpack' | 'wamp.2.cbor'

export type SerializerType = 'json' | 'msgpack' | 'cbor'

export type TransportType = 'websocket' | 'rawsocket'

export interface ISerializer {
  type: SerializerType
  isBinary: boolean
  serialize: (obj: Serializable) => Serialized
  unserialize: (payload: Serialized) => Serializable
}

export interface PayloadPassthruDetails {
  ppt_scheme: string
  ppt_serializer: string
  ppt_cipher: string
  ppt_keyid: string
}

export interface IdGenerator {
  next(): ID
}

export * from './types/features.js'
export * from './types/message.js'
export * from './types/broker.js'
export * from './types/dealer.js'
