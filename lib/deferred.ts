export class Deferred<T> {
  public readonly promise: Promise<T>

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this._resolve = resolve
      this._reject = reject
    })
  }

  private _resolve?: (value: T) => void

  public get resolve() {
    if (!this._resolve) {
      throw new Error('Resolver not initialized yet')
    }
    return this._resolve
  }

  private _reject?: (reason: Error) => void

  public get reject() {
    if (!this._reject) {
      throw new Error('Rejecter not initialized yet')
    }
    return this._reject
  }
}

export function asCancelable<T>(promise: Promise<T>): {
  promise: Promise<T>
  cancel: (reason?: Error) => void
} {
  let cancel: (reason?: Error) => void = () => {}

  const cancelablePromise = new Promise<T>((resolve, reject) => {
    cancel = reject
    Promise.race([
      promise,
      new Promise<never>((_, reject) => (cancel = reject)),
    ]).then(resolve, reject)
  })

  return {
    promise: cancelablePromise,
    cancel: cancel,
  }
}
