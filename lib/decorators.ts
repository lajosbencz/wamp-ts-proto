export const ORDERED_PROPERTIES_KEY = Symbol('orderedProperties')
export const OPTIONAL_PROPERTIES_KEY = Symbol('optionalProperties')

export function OrderedProperty(order: number, isOptional = false) {
  return function (target: object, propertyKey: string) {
    if (!Reflect.hasMetadata(ORDERED_PROPERTIES_KEY, target)) {
      Reflect.defineMetadata(ORDERED_PROPERTIES_KEY, [], target)
    }
    if (isOptional) {
      if (!Reflect.hasMetadata(OPTIONAL_PROPERTIES_KEY, target)) {
        Reflect.defineMetadata(OPTIONAL_PROPERTIES_KEY, [], target)
      }
      const optionalProps = Reflect.getMetadata(
        OPTIONAL_PROPERTIES_KEY,
        target,
      ) as string[]
      optionalProps.push(propertyKey)
      Reflect.defineMetadata(OPTIONAL_PROPERTIES_KEY, optionalProps, target)
    }
    const orderedProps = Reflect.getMetadata(
      ORDERED_PROPERTIES_KEY,
      target,
    ) as { key: string; order: number }[]
    orderedProps.push({ key: propertyKey, order })
    Reflect.defineMetadata(ORDERED_PROPERTIES_KEY, orderedProps, target)
  }
}
