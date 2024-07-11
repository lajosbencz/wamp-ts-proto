import { decode, encode } from 'cbor-x'
import { Serializers } from '../serializer.js'
import type {
  ISerializer,
  Serializable,
  Serialized,
  SerializedBinary,
  SerializerType,
} from '../types.js'

export class CborSerializer implements ISerializer {
  private static _instance?: CborSerializer
  readonly type: SerializerType = Serializers.Cbor
  readonly isBinary = true

  protected constructor() {}

  static instance(): CborSerializer {
    if (!this._instance) {
      this._instance = new CborSerializer()
    }
    return this._instance
  }

  serialize(obj: Serializable): Serialized {
    return encode(obj) as SerializedBinary
  }

  unserialize(data: Serialized): Serializable {
    return decode(data as SerializedBinary) as Serializable
  }
}
