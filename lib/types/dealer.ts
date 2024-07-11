import type {
  Args,
  ID,
  KwArgs,
  PayloadPassthruDetails,
  Serializable,
  URI,
} from '../types.js'

export interface RegistrationType {
  procedure: URI
  endpoint: RegistrationCallback
  options: KwArgs
  id: ID
  active: boolean
}

export type RegistrationCallback = (
  args: Args,
  kwArgs: KwArgs,
  details: InvocationDetails,
  registration: RegistrationType,
) => void | Serializable | Promise<void | Serializable>

export type InvocationDetails = KwArgs & {
  procedure?: URI
  caller: ID
  caller_authid?: string
  caller_authrole?: string
  receive_progress?: boolean
  trustlevel?: number
}

export type InterruptOptions = KwArgs & {
  // @todo
}

export interface AbortDetails {
  message?: string
}

export interface CallOptionsBase {
  receive_progress?: boolean
  disclose_me?: boolean
  timeout?: number
}

export type CallOptions =
  | CallOptionsBase
  | (CallOptionsBase & {
      runmode: 'partition'
      rkey: string
    })

export type CancelOptionsMode = 'skip' | 'kill' | 'killnowait'

export interface CancelOptions {
  mode?: CancelOptionsMode
}

export type RegisterOptionsMatch = 'exact' | 'prefix' | 'wildcard'
export type RegisterOptionsInvoke =
  | 'single'
  | 'roundrobin'
  | 'random'
  | 'first'
  | 'last'

export interface RegisterOptions {
  forward_timeout?: boolean
  disclose_caller?: boolean
  match?: RegisterOptionsMatch
  invoke?: RegisterOptionsInvoke
}

export type UnregisteredDetails = KwArgs & {
  // @todo
}

export interface ResultDetailsBase {
  progress?: boolean
}

export type ResultDetails =
  | ResultDetailsBase
  | (ResultDetailsBase & PayloadPassthruDetails)

export interface YieldOptionsBase {
  progress?: boolean
}

export type YieldOptions =
  | YieldOptionsBase
  | (YieldOptionsBase & PayloadPassthruDetails)
