import type { RouterFeatures, ClientFeatures } from './types.js'

export const DefaultRouterFeatures: RouterFeatures = {
  broker: {
    features: {
      event_retention: true,
      event_history: true,
      payload_passthru_mode: false,
      publisher_exclusion: true,
      publisher_identification: true,
      session_meta_api: true,
      subscriber_blackwhite_listing: true,
      sharded_subscriptions: false,
    },
  },
  dealer: {
    features: {
      call_canceling: true,
      call_timeout: true,
      caller_identification: true,
      payload_passthru_mode: false,
      progressive_call_results: true,
      session_meta_api: true,
      sharded_registration: false,
    },
  },
}

export const DefaultClientFeatures: ClientFeatures = {
  callee: {
    features: {
      call_canceling: true,
      call_timeout: true,
      call_trustlevels: true,
      caller_identification: true,
      pattern_based_registration: true,
      payload_passthru_mode: false,
      progressive_call_results: true,
      registration_revocation: true,
      shared_registration: true,
      sharded_registration: false,
    },
  },
  caller: {
    features: {
      call_canceling: true,
      call_timeout: true,
      caller_identification: true,
      payload_passthru_mode: false,
      progressive_call_results: true,
      sharded_registration: false,
    },
  },
  publisher: {
    features: {
      payload_passthru_mode: false,
      publisher_exclusion: true,
      publisher_identification: true,
      subscriber_blackwhite_listing: true,
      sharded_subscriptions: false,
    },
  },
  subscriber: {
    features: {
      pattern_based_subscription: true,
      payload_passthru_mode: false,
      publication_trustlevels: true,
      publisher_identification: true,
      subscription_revocation: true,
      sharded_subscriptions: false,
    },
  },
}
