export interface FeatureSet {
  payload_passthru_mode?: boolean
  // [key: string]?: boolean
}

export type CallSharedFeatures = FeatureSet & {
  caller_identification?: boolean
  call_timeout?: boolean
  call_canceling?: boolean
  progressive_call_results?: boolean
  sharded_registration?: boolean
}

export type CallerFeatures = CallSharedFeatures // & {}

export type CalleeFeatures = CallSharedFeatures & {
  call_trustlevels?: boolean
  pattern_based_registration?: boolean
  shared_registration?: boolean
  registration_revocation?: boolean
}

export type PublishSharedFeatures = FeatureSet & {
  publisher_identification?: boolean
  sharded_subscriptions?: boolean
}

export type PublisherFeatures = PublishSharedFeatures & {
  subscriber_blackwhite_listing?: boolean
  publisher_exclusion?: boolean
}

export type SubscriberFeatures = PublishSharedFeatures & {
  publication_trustlevels?: boolean
  pattern_based_subscription?: boolean
  subscription_revocation?: boolean
}

export type DealerFeatures = CallerFeatures & {
  session_meta_api?: boolean
}

export type BrokerFeatures = PublisherFeatures & {
  event_retention?: boolean
  event_history?: boolean
  session_meta_api?: boolean
}

export interface RouterFeatures {
  broker: {
    features: BrokerFeatures
  }
  dealer: {
    features: DealerFeatures
  }
}

export interface ClientFeatures {
  caller: {
    features: CallerFeatures
  }
  callee: {
    features: CalleeFeatures
  }
  publisher: {
    features: PublisherFeatures
  }
  subscriber: {
    features: SubscriberFeatures
  }
}
