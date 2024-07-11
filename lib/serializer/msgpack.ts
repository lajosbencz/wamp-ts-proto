import { decode, encode } from '@msgpack/msgpack'
import { Serializers } from '../serializer.js'
import {
  ISerializer,
  Serializable,
  Serialized,
  SerializedBinary,
} from '../types.js'

export class MsgpackSerializer implements ISerializer {
  private static _instance?: MsgpackSerializer
  readonly type = Serializers.Msgpack
  readonly isBinary = true

  private constructor() {}

  static instance(): MsgpackSerializer {
    if (!this._instance) {
      this._instance = new MsgpackSerializer()
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
