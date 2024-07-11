import { Serializers } from '../serializer.js'
import type {
  SerializerType,
  ISerializer,
  Serializable,
  Serialized,
  SerializedString,
} from '../types.js'

export class JsonSerializer implements ISerializer {
  private static _instance?: JsonSerializer
  readonly type: SerializerType = Serializers.Json
  readonly isBinary = false

  protected constructor() {}

  static instance(): JsonSerializer {
    if (!this._instance) {
      this._instance = new JsonSerializer()
    }
    return this._instance
  }

  serialize(obj: Serializable): Serialized {
    return JSON.stringify(obj)
  }

  unserialize(payload: Serialized): Serializable {
    return JSON.parse(payload as SerializedString) as Serializable
  }
}
