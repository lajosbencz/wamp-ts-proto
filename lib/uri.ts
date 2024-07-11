export enum ErrorURI {
  InvalidUri = 'wamp.error.invalid_uri',
  ProcedureAlreadyExists = 'wamp.error.procedure_already_exists',
  InvalidArgument = 'wamp.error.invalid_argument',
  PayloadSizeExceeded = 'wamp.error.payload_size_exceeded',
  ProtocolViolation = 'wamp.error.protocol_violation',
  NotAuthorized = 'wamp.error.not_authorized',
  NoSuchRealm = 'wamp.error.no_such_realm',
  NoSuchRole = 'wamp.error.no_such_role',
  NoSuchSession = 'wamp.error.no_such_session',
  NoSuchProcedure = 'wamp.error.no_such_procedure',
  NoSuchRegistration = 'wamp.error.no_such_registration',
  NoSuchSubscription = 'wamp.error.no_such_subscription',
  NoSuchPrincipal = 'wamp.error.wamp.error.no_such_principal',
  NoAvailableCallee = 'wamp.error.no_available_callee',
  FeatureNotSupported = 'wamp.error.feature_not_supported',
  DiscloseMeNotAllowed = 'wamp.error.disclose_me.not_allowed',
  OptionNotAllowed = 'option_not_allowed',
  OptionDisallowedDiscloseMe = 'wamp.error.option_disallowed.disclose_me',
  NoMatchingAuthMethod = 'wamp.error.no_matching_auth_method',
  AuthenticationDenied = 'wamp.error.authentication_denied',
  AuthenticationFailed = 'wamp.error.authentication_failed',
  AuthenticationRequired = 'wamp.error.authentication_required',
  AuthorizationDenied = 'wamp.error.authorization_denied',
  AuthorizationFailed = 'wamp.error.authorization_failed',
  AuthorizationRequired = 'wamp.error.authorization_required',
  NetworkFailure = 'wamp.error.network_failure',
  Unavailable = 'wamp.error.unavailable',
  Timeout = 'wamp.error.timeout',
  Canceled = 'wamp.error.canceled',
  Killed = 'wamp.error.killed',

  // custom
  TransportIdConflict = 'wamp.error.transport.id_conflict',
  SessionIdConflict = 'wamp.error.session.id_conflict',
  OutOfSequenceId = 'wamp.error.out_of_sequence_id'
}

export enum CloseURI {
  SystemShutdown = 'wamp.close.system_shutdown',
  CloseRealm = 'wamp.close.close_realm',
  GoodbyeAndOut = 'wamp.close.goodbye_and_out',
}
